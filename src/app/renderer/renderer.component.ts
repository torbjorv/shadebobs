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
  resizeTimeout;
  bufferSize = [1234, 400];

  paletteR: number[];
  paletteG: number[];
  paletteB: number[];

  tail: FifoQueue<[number, number]>;
  _tailLength: number = 10000;
  maxTailLength = 30000

  // frameSize: [number, number];

  bobSize = 30;
  bob: number[];

  _bobCount: number = 1;
  
  public context: CanvasRenderingContext2D;
  
  @Input("speed")
  public speed: number = 1;

  @Input("tailLength")
  public set tailLength(value: number) {
    value = Math.min(this.maxTailLength, value);

    if (this.tailLength === value) {
      return;
    }

    this._tailLength = value;
    this.reset();
  }

  public get tailLength(): number {
    return this._tailLength;
  }


  @Input('bobCount')
  public set bobCount(value: number) {

    value = Math.min(10, value);
    value = Math.max(1, value);
    if (this.bobCount === value) {
      return;
    }

    this.reset();
    this._bobCount = value;
  }

  public get bobCount(): number {
    return this._bobCount;
  }

  
  constructor() { 
    this.bob = RendererComponent.buildBob(this.bobSize);

    this.paletteR = this.buildPalette(100, [180, 255]);
    this.paletteG = this.buildPalette(100, [100, 255]);
    this.paletteB = this.buildPalette(73, [200, 250]);
    this.tail = new FifoQueue(this.maxTailLength);

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

    // this.frameSize = [canvas.offsetWidth, canvas.offsetHeight];
    // canvas.width = canvas.offsetWidth;
    // canvas.height = canvas.offsetHeight;

    this.tail = new FifoQueue(this.tailLength * this.bobCount);

    this.buffer.fill(0);

    this.image = this.context.createImageData(this.bufferSize[0], this.bufferSize[1]);

    for (let i = 0; i < this.image.data.length; i += 4) {
      this.image.data[i+0] = this.paletteR[0];
      this.image.data[i+1] = this.paletteG[0];
      this.image.data[i+2] = this.paletteB[0];
      this.image.data[i+3] = 255;
    }

  }

  // @HostListener('window:resize')
  // onWindowResize() {
  //     //debounce resize, wait for resize to finish before doing stuff
  //     // if (this.resizeTimeout) {
  //     //     clearTimeout(this.resizeTimeout);
  //     // }
  //     // this.resizeTimeout = setTimeout((() => {
  //     //     this.reset();
  //     // }).bind(this), 500);
  // }

  private static buildBob(size: number): number[] {

    let bob: number[] = new Array(size*size);

    let center = size/2;

    let k = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {

        let distance = Math.min(size/2, Math.sqrt(Math.pow(center - i, 2) + Math.pow(center - j, 2)));
        let normalized = 1 - distance * 2 / size;

        bob[k] = normalized;
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

      for (let j = 0; j < this.bobCount; j++) {
        for (let i = 0; i < multiplier; i++) {
          let k = this.previousT + elapsed * (i/multiplier) + j*1000;

          let x: number = Math.round(k/2) % this.bufferSize[0];
          if (j % 2 == 1) {
            x = this.bufferSize[0] - x;
          }
          let y: number = Math.round(this.bufferSize[1] * Math.cos(k/300 + (j/this.bobCount)*2*Math.PI) * 0.45 + this.bufferSize[1]/2);
      
          this.drawBob(x, y, this.bobSize, this.bob);
  
          if (this.tail.length == this.tail.capacity) {
            let bob:[number, number] = this.tail.pop();
            this.eraseBob(bob[0], bob[1], this.bobSize, this.bob);
          }
          this.tail.push([x, y]);  
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
