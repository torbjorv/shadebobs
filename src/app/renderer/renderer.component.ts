import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';
import { FifoQueue } from '../fifoqueue';
import { Settings } from '../settings';
import { Subscription } from 'rxjs';

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
  bob: number[];
  public context: CanvasRenderingContext2D;

  private _settingsSubscription: Subscription;

  private _tail: FifoQueue<[number, number]>;
  maxTailLength = 50000

  private _settings: Settings;
  @Input("settings") 
  public set settings(value: Settings) {

    if (this._settingsSubscription) {
      this._settingsSubscription.unsubscribe();
    } 

    this._settingsSubscription = value.onChanged.subscribe(() => {
      this.checkRange('tail', value.tail, 100, 50000);
      this.checkRange('count', value.count, 1, 10);
      this.checkRange('speed', value.speed, 0.1, 10);
      this.checkRange('size', value.size, 10, 50);
      this.checkRange('force', value.force, 1, 10);
  
      this._settings = value;
      this.reset();  
    });
    this._settings = value;
  }

  public get settings(): Settings {
    return this._settings;
  }

  constructor() { 

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

    if (!this.settings) {
      return;
    }

    this.paletteR = [...this.settings.palette[0], ...this.settings.palette[0].reverse()];
    this.paletteG = [...this.settings.palette[1], ...this.settings.palette[1].reverse()];
    this.paletteB = [...this.settings.palette[2], ...this.settings.palette[2].reverse()];

    this._tail = new FifoQueue(this.settings.tail * this.settings.count);
    this.bob = RendererComponent.buildBob(this.settings.size, this.settings.force);

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

    if (this.settings) {

      t *= this.settings.speed;
      let multiplier = Math.round(this.frameRateMultiplier*this.settings.speed);

      let elapsed = t - this.previousT;
      if (t !== this.previousT) {

        for (let j = 0; j < this.settings.count; j++) {
          for (let i = 0; i < multiplier; i++) {
            let k = this.previousT + elapsed * (i/multiplier) + j*1000;

            let x: number = Math.round(k/2) % this.bufferSize[0];
            if (j % 2 == 1) {
              x = this.bufferSize[0] - x;
            }
            let y: number = Math.round(this.bufferSize[1] * Math.cos(k/300 + (j/this.settings.count)*2*Math.PI) * 0.45 + this.bufferSize[1]/2);
        
            this.drawBob(x, y, this.settings.size, this.bob);
    
            if (this._tail.length == this._tail.capacity) {
              let bob:[number, number] = this._tail.pop();
              this.eraseBob(bob[0], bob[1], this.settings.size, this.bob);
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
    }

    if (this.running) {
      requestAnimationFrame((t) => this.renderFrame(t))
    }
  }

  private checkRange(name: string, value: number, min: number, max: number) {
    if (value < min || value > max) {
      throw new Error(`${ name } should be in range [${ min }, ${ max }] but is ${ value }`);
    }
  }

  

}
