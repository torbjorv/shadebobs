import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FifoQueue } from '../fifoqueue';
import { CardinalCurve } from '../cardinal-curve';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.sass']
})
export class RendererComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('viewport', { static: false })
  private _canvas: ElementRef;

  private _image: ImageData;
  private _previousT: number = 0;
  private _frameRateMultiplier = 10;

  // The draw buffer size is fixed, regardless of device so that the sine-curve patterns turn out
  // the same on any screen resolution. 
  private _bufferSize = [1234, 400];
  private _buffer: number[];

  @Input('red')
  public red: [number, number][] = [[0, 0]];

  @Input('green')
  public green: [number, number][] = [[0, 0]];

  @Input('blue')
  public blue: [number, number][] = [[0, 0]];

  public redLookup: number[] = [];
  public greenLookup: number[] = [];
  public blueLookup: number[] = [];

  _bob: number[];
  private _context: CanvasRenderingContext2D;

  private _tail: FifoQueue<[number, number]>;


  @Input()
  public tail: number = 100;
  @Input()
  public count: number = 100;
  @Input()
  public speed: number = 100;
  @Input()
  public size: number = 100;
  @Input()
  public force: number = 100;

  constructor() {

    this._tail = new FifoQueue(this.size);

    this._buffer = new Array(this._bufferSize[0] * this._bufferSize[1]);
    this._buffer.fill(0);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    let canvas = (<HTMLCanvasElement>this._canvas.nativeElement);
    this._context = canvas.getContext('2d');
    canvas.width = this._bufferSize[0];
    canvas.height = this._bufferSize[1];

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

    if ('tail' in changes || 'size' in changes || 'force' in changes || 'count' in changes) {
      this.reset();
    }

  }


  public reset(): void {

    if (!this._canvas) {
      return;
    }

    this._tail = new FifoQueue(this.tail * this.count);
    this._bob = RendererComponent.buildBob(this.size, this.force);

    this._buffer.fill(0);

    this._image = this._context.createImageData(this._bufferSize[0], this._bufferSize[1]);
  }

  private static buildBob(size: number, force: number): number[] {

    let bob: number[] = new Array(size * size);

    let center = size / 2;

    let k = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {

        let distance = Math.min(size / 2, Math.sqrt(Math.pow(center - i, 2) + Math.pow(center - j, 2)));
        let normalized = 1 - distance * 2 / size;

        bob[k] = normalized * force;
        k++;
      }
    }

    return bob;
  }

  private drawBob(x: number, y: number, size: number, bob: number[]): void {

    x -= Math.round(size / 2);
    y -= Math.round(size / 2);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let k = ((x + i) + (y + j) * this._image.width);
        this._buffer[k] += bob[i + j * size];
      }
    }
  }

  private eraseBob(x: number, y: number, size: number, bob: number[]): void {

    x -= Math.round(size / 2);
    y -= Math.round(size / 2);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let k = ((x + i) + (y + j) * this._image.width);
        this._buffer[k] -= bob[i + j * size];
      }
    }
  }

  private renderFrame(t: number): void {

    t *= this.speed;
    let multiplier = Math.round(this._frameRateMultiplier * this.speed);

    let elapsed = t - this._previousT;
    if (t !== this._previousT) {

      for (let j = 0; j < this.count; j++) {
        for (let i = 0; i < multiplier; i++) {
          let k = this._previousT + elapsed * (i / multiplier) + j * 1000;

          let x: number = Math.round(k / 2) % this._bufferSize[0];
          if (j % 2 == 1) {
            x = this._bufferSize[0] - x;
          }
          let y: number = Math.round(this._bufferSize[1] * Math.cos(k / 300 + (j / this.count) * 2 * Math.PI) * 0.45 + this._bufferSize[1] / 2);

          this.drawBob(x, y, this.size, this._bob);

          if (this._tail.length == this._tail.capacity) {
            let bob: [number, number] = this._tail.pop();
            this.eraseBob(bob[0], bob[1], this.size, this._bob);
          }
          this._tail.push([x, y]);
        }
      }

      for (let i = 0; i < this._buffer.length; i++) {
        let k = Math.round(this._buffer[i]);
        this._image.data[i * 4 + 0] = this.redLookup[k % this.redLookup.length];
        this._image.data[i * 4 + 1] = this.greenLookup[k % this.greenLookup.length];
        this._image.data[i * 4 + 2] = this.blueLookup[k % this.blueLookup.length];
        this._image.data[i * 4 + 3] = 255;
      }
    }

    this._previousT = t;
    this._context.putImageData(this._image, 0, 0);

    requestAnimationFrame((t) => this.renderFrame(t))
  }
}
