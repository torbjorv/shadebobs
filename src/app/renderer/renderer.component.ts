import {
  Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges,
  SimpleChanges, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FifoQueue } from '../fifoqueue';
import { CardinalCurve } from '../cardinal-curve';
import { Utils } from '../utils/utils';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.sass']
})
export class RendererComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('viewport', { static: false })
  private _canvas: ElementRef;

  private _image: ImageData;
  private _previousT = 0;
  private _frameRateMultiplier = 10;

  // The draw buffer size is fixed, regardless of device so that the sine-curve patterns turn out
  // the same on any screen resolution.
  private _bufferSize = [1234, 400];
  private _buffer: number[];

  public fps = 0;

  @Input()
  public red: [number, number][] = [[0, 0]];

  @Input()
  public green: [number, number][] = [[0, 0]];

  @Input()
  public blue: [number, number][] = [[0, 0]];

  public redLookup: number[] = [];
  public greenLookup: number[] = [];
  public blueLookup: number[] = [];

  shadebob: number[];
  private context: CanvasRenderingContext2D;

  private queue: FifoQueue<[number, number]>;


  @Input()
  public tail = 100;
  @Input()
  public count = 100;
  @Input()
  public speed = 100;
  @Input()
  public size = 100;
  @Input()
  public force = 100;

  private _settingsChange: EventEmitter<void> = new EventEmitter();
  private _colorsChange: EventEmitter<void> = new EventEmitter();

  private static buildBob(size: number, force: number): number[] {

    const bob: number[] = new Array(size * size);
    const center = size / 2;

    let k = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {

        const distance = Math.min(size / 2, Utils.distance([i, j], [center, center]));
        const normalized = 1 - distance * 2 / size;

        bob[k] = normalized * force;
        k++;
      }
    }

    return bob;
  }


  constructor(private _changeDetector: ChangeDetectorRef) {

    this.queue = new FifoQueue(this.size);

    this._buffer = new Array(this._bufferSize[0] * this._bufferSize[1]);
    this._buffer.fill(0);

    this._settingsChange.pipe(debounceTime(500)).subscribe(() => this.reset());
    this._colorsChange.pipe(throttleTime(100)).subscribe(() => this.updateImage());
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    const canvas = this._canvas.nativeElement as HTMLCanvasElement;
    this.context = canvas.getContext('2d');

    canvas.width = this._bufferSize[0];
    canvas.height = this._bufferSize[1];

    this._image = this.context.createImageData(this._bufferSize[0], this._bufferSize[1]);

    this.reset();
    this.renderFrame(0);
  }

  public ngOnChanges(changes: SimpleChanges) {

    if ('red' in changes) {
      this.redLookup = CardinalCurve.build(this.red, 0.5, 100).concat(CardinalCurve.build(this.red, 0.5, 100).reverse());
    }

    if ('green' in changes) {
      this.greenLookup = CardinalCurve.build(this.green, 0.5, 100).concat(CardinalCurve.build(this.green, 0.5, 100).reverse());
    }

    if ('blue' in changes) {
      this.blueLookup = CardinalCurve.build(this.blue, 0.5, 100).concat(CardinalCurve.build(this.blue, 0.5, 100).reverse());
    }

    if ('red' in changes || 'green' in changes || 'blue' in changes) {
      this._colorsChange.next();
    }

    if ('tail' in changes || 'size' in changes || 'force' in changes || 'count' in changes) {
      this._settingsChange.next();
    }
  }

  public reset(): void {

    if (!this._canvas) {
      return;
    }

    this.queue = new FifoQueue(this.tail * this.count);
    this.shadebob = RendererComponent.buildBob(this.size, this.force);

    this._buffer.fill(0);
    this.updateImage();
  }


  private drawBob(x: number, y: number, size: number, bob: number[]): void {

    x -= Math.round(size / 2);
    y -= Math.round(size / 2);

    const redLength = this.redLookup.length;
    const greenLength = this.greenLookup.length;
    const blueLength = this.blueLookup.length;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const k = ((x + i) + (y + j) * this._image.width);
        this._buffer[k] += bob[i + j * size];

        const v = Math.round(this._buffer[k]);
        this._image.data[k * 4 + 0] = this.redLookup[v % redLength];
        this._image.data[k * 4 + 1] = this.greenLookup[v % greenLength];
        this._image.data[k * 4 + 2] = this.blueLookup[v % blueLength];
        this._image.data[k * 4 + 3] = 255;
      }
    }
  }

  private eraseBob(x: number, y: number, size: number, bob: number[]): void {

    x -= Math.round(size / 2);
    y -= Math.round(size / 2);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const k = ((x + i) + (y + j) * this._image.width);
        this._buffer[k] -= bob[i + j * size];

        const v = Math.round(this._buffer[k]);
        this._image.data[k * 4 + 0] = this.redLookup[v % this.redLookup.length];
        this._image.data[k * 4 + 1] = this.greenLookup[v % this.greenLookup.length];
        this._image.data[k * 4 + 2] = this.blueLookup[v % this.blueLookup.length];
        this._image.data[k * 4 + 3] = 255;
      }
    }
  }

  private renderFrame(tActual: number): void {

    const t = tActual * this.speed;
    const tPrevious = this._previousT * this.speed;
    const multiplier = Math.round(this._frameRateMultiplier * this.speed);

    const elapsed = t - tPrevious;
    if (t !== tPrevious) {

      for (let j = 0; j < this.count; j++) {
        for (let i = 0; i < multiplier; i++) {
          const k = tPrevious + elapsed * (i / multiplier) + j * 1000;

          let x: number = Math.round(k / 2) % this._bufferSize[0];
          if (j % 2 === 1) {
            x = this._bufferSize[0] - x;
          }
          const y: number =
            Math.round(this._bufferSize[1] * Math.cos(k / 300 + (j / this.count) * 2 * Math.PI) * 0.45 + this._bufferSize[1] / 2);

          this.drawBob(x, y, Math.sqrt(this.shadebob.length), this.shadebob);

          if (this.queue.length === this.queue.capacity) {
            const bob: [number, number] = this.queue.pop();
            this.eraseBob(bob[0], bob[1], Math.sqrt(this.shadebob.length), this.shadebob);
          }
          this.queue.push([x, y]);
        }
      }
    }

    this.context.putImageData(this._image, 0, 0);

    const elapsedMs = tActual - this._previousT;
    this.fps = 1000 / elapsedMs;
    this._changeDetector.detectChanges();
    this._previousT = tActual;

    requestAnimationFrame((frameT) => this.renderFrame(frameT));
  }

  private updateImage() {
    if (!this._image) {
      return;
    }

    for (let i = 0; i < this._buffer.length; i++) {
      const k = Math.round(this._buffer[i]);
      this._image.data[i * 4 + 0] = this.redLookup[k % this.redLookup.length];
      this._image.data[i * 4 + 1] = this.greenLookup[k % this.greenLookup.length];
      this._image.data[i * 4 + 2] = this.blueLookup[k % this.blueLookup.length];
      this._image.data[i * 4 + 3] = 255;
    }
  }
}
