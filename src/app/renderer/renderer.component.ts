import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';
import { FifoQueue } from '../fifoqueue';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.sass']
})
export class RendererComponent implements OnInit, AfterViewInit {

  @ViewChild('viewport', {static: false}) 
  canvas: ElementRef;
  running: Boolean = true;
  image: ImageData;
  previousT: number = 0;
  frameRateMultiplier = 10;
  buffer: number[];
  bufferSize = [1234, 400];

  paletteR: number[];
  paletteG: number[];
  paletteB: number[];
  _size = 30;
  bob: number[];
  _count: number = 1;
  public context: CanvasRenderingContext2D;

  _force: number = 1;
  

  private _tail: FifoQueue<[number, number]>;
  private _length: number = 10000;
  maxTailLength = 50000

  @Input('size')
  public set size(value: number) {
    value = Math.min(50, value);
    value = Math.max(10, value);
    if (this.size === value) {
      return;
    }
    this._size = value;
    this.reset();
  }

  public get size(): number {
    return this._size;
  }

  @Input('force')
  public set force(value: number) {
    value = Math.min(10, value);
    value = Math.max(1, value);
    if (this.force === value) {
      return;
    }
    this._force = value;
    this.reset();
  }

  public get force(): number {
    return this._force;
  }
  
  @Input("speed")
  public speed: number = 1;

  @Input("tail")
  public set tail(value: number) {
    value = Math.min(this.maxTailLength, value);

    if (this.tail === value) {
      return;
    }

    this._length = value;
    this.reset();
  }

  public get tail(): number {
    return this._length;
  }


  @Input('count')
  public set count(value: number) {

    value = Math.min(10, value);
    value = Math.max(1, value);
    if (this.count === value) {
      return;
    }

    this.reset();
    this._count = value;
  }

  public get count(): number {
    return this._count;
  }

  
  constructor() { 

    this.paletteR = this.buildPalette(200, [255, 0]);
    this.paletteG = this.buildPalette(210, [255, 0]);
    this.paletteB = this.buildPalette(220, [255, 0]);
    this._tail = new FifoQueue(this.maxTailLength);

    this.buffer = new Array(this.bufferSize[0] * this.bufferSize[1]);
    this.buffer.fill(0);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    let canvas = (<HTMLCanvasElement>this.canvas.nativeElement);
    this.context = canvas.getContext('2d');
    canvas.width = this.bufferSize[0];
    canvas.height = this.bufferSize[1];

    this.reset();
    this.renderFrame(0);
  }

  private reset(): void {

    if (!this.canvas) {
      return;
    }

    this._tail = new FifoQueue(this.tail * this.count);
    this.bob = RendererComponent.buildBob(this.size, this.force);

    this.buffer.fill(0);

    this.image = this.context.createImageData(this.bufferSize[0], this.bufferSize[1]);

    for (let i = 0; i < this.image.data.length; i += 4) {
      this.image.data[i+0] = this.paletteR[0];
      this.image.data[i+1] = this.paletteG[0];
      this.image.data[i+2] = this.paletteB[0];
      this.image.data[i+3] = 255;
    }

  }

  private static buildBob(size: number, force: number): number[] {

    let bob: number[] = new Array(size*size);

    let center = size/2;

    let k = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {

        let distance = Math.min(size/2, Math.sqrt(Math.pow(center - i, 2) + Math.pow(center - j, 2)));
        let normalized = 1 - distance * 2 / size;

        bob[k] = normalized * force;
        k++;
      }
    }

    return bob;
  }

  private buildPalette(count: number, range: [number, number]): number[] {

    let palette: number[] = new Array(count);

    for (let i = 0; i < count; i++) {
      let k = Math.PI * 2 * i / count + Math.PI;
      let t = Math.cos(k) * 0.5 + 0.5;
      palette[i] = range[0] + (range[1] - range[0]) * t;
    }

    return palette;
  }

  private drawBob(x: number, y: number, size: number, bob: number[]): void {

    x -= Math.round(size/2);
    y -= Math.round(size/2);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let k = ((x + i) + (y + j) * this.image.width);
        this.buffer[k] += bob[i + j*size];
      }
    }
  }

  private eraseBob(x: number, y: number, size: number, bob: number[]): void {

    x -= Math.round(size/2);
    y -= Math.round(size/2);

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let k = ((x + i) + (y + j) * this.image.width);
        this.buffer[k] -= bob[i + j*size];
      }
    }
  }

  private renderFrame(t: number): void {

    t *= this.speed;
    let multiplier = Math.round(this.frameRateMultiplier*this.speed);

    let elapsed = t - this.previousT;
    if (t !== this.previousT) {

      for (let j = 0; j < this.count; j++) {
        for (let i = 0; i < multiplier; i++) {
          let k = this.previousT + elapsed * (i/multiplier) + j*1000;

          let x: number = Math.round(k/2) % this.bufferSize[0];
          if (j % 2 == 1) {
            x = this.bufferSize[0] - x;
          }
          let y: number = Math.round(this.bufferSize[1] * Math.cos(k/300 + (j/this.count)*2*Math.PI) * 0.45 + this.bufferSize[1]/2);
      
          this.drawBob(x, y, this.size, this.bob);
  
          if (this._tail.length == this._tail.capacity) {
            let bob:[number, number] = this._tail.pop();
            this.eraseBob(bob[0], bob[1], this.size, this.bob);
          }
          this._tail.push([x, y]);  
        }
      }

      for (let i = 0; i < this.buffer.length; i++) {
        let k = Math.round(this.buffer[i]);
        this.image.data[i * 4 + 0] = this.paletteR[ k % this.paletteR.length];
        this.image.data[i * 4 + 1] = this.paletteG[ k % this.paletteG.length];
        this.image.data[i * 4 + 2] = this.paletteB[ k % this.paletteB.length];
        this.image.data[i * 4 + 3] = 255;
      }
    }


    this.previousT = t;

    this.context.putImageData(this.image, 0, 0);

    if (this.running) {
      requestAnimationFrame((t) => this.renderFrame(t))
    }
  }

  

}
