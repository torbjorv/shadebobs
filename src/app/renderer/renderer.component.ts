import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

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
  frameRateMultiplier = 50;
  buffer: number[];

  paletteR: number[];
  paletteG: number[];
  paletteB: number[];

  queue: [number, number][];
  queuePointer = 0;

  frameSize: [number, number];

  bobSize = 60;
  bob: number[];
  
  public context: CanvasRenderingContext2D;
  
  constructor() { 
    this.bob = RendererComponent.buildBob(this.bobSize);

    this.paletteR = this.buildPalette(150, [180, 255]);
    this.paletteG = this.buildPalette(150, [100, 255]);
    this.paletteB = this.buildPalette(103, [200, 250]);

    this.queue = new Array(30000);
    for (let i = 0; i < this.queue.length; i++) {
      this.queue[i] = [-1, -1];
    }

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    let canvas = (<HTMLCanvasElement>this.canvas.nativeElement);
    this.frameSize = [canvas.offsetWidth, canvas.offsetHeight];
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    this.context = canvas.getContext('2d');

    this.buffer = new Array(this.frameSize[0] * this.frameSize[1]);
    for (let i = 0; i < this.buffer.length; i++) this.buffer[i] = 0;

    

    this.image = this.context.createImageData(this.frameSize[0], this.frameSize[1]);

    for (let i = 0; i < this.image.data.length; i += 4) {
      this.image.data[i+0] = this.paletteR[0];
      this.image.data[i+1] = this.paletteG[0];
      this.image.data[i+2] = this.paletteB[0];
      this.image.data[i+3] = 255;
    }

    this.renderFrame(0);
  }

  private static buildBob(size: number): number[] {

    let bob: number[] = new Array(size*size);

    let center = size/2;

    let k = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {

        let distance = Math.min(size/2, Math.sqrt(Math.pow(center - i, 2) + Math.pow(center - j, 2)));
        let normalized = 1 - distance * 2 / size;

        bob[k] = Math.round(normalized);
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

  private nCos(k: number): number {
    return Math.cos(k) * 0.5 + 0.5;
  }

  private renderFrame(t: number): void {

    if (t !== this.previousT) {

      for (let i = 0; i < this.frameRateMultiplier; i++) {

        let k = this.previousT + (t - this.previousT) * (i/this.frameRateMultiplier);
        let x: number = Math.round(k/0.2) % this.image.width;

        // let y = Math.round(((Math.cos(k/60) * Math.cos(k/15)) * 0.5 + 0.5) * this.image.height);

        let y: number = Math.round(this.image.height * Math.cos(k/73) * 0.45 + this.image.height/2);
    
        this.drawBob(x, y, this.bobSize, this.bob);

        if (this.queue[this.queuePointer][0] != -1) {
          this.eraseBob(this.queue[this.queuePointer][0], this.queue[this.queuePointer][1], this.bobSize, this.bob);
        }
        this.queue[this.queuePointer] = [x, y];
        this.queuePointer = (this.queuePointer + 1) % this.queue.length;
      }

      for (let i = 0; i < this.buffer.length; i++) {
        this.image.data[i * 4 + 0] = this.paletteR[Math.round(this.buffer[i]) % this.paletteR.length];
        this.image.data[i * 4 + 1] = this.paletteG[Math.round(this.buffer[i]) % this.paletteG.length];
        this.image.data[i * 4 + 2] = this.paletteB[Math.round(this.buffer[i]) % this.paletteB.length];
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
