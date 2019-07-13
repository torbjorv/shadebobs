import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import { Observable } from 'rxjs';
import { Utils } from '../utils/utils';
import { DomSanitizer } from '@angular/platform-browser';

enum DragState {
  None = 'None',
  Holding = 'Holding',
  Dragging = 'Dragging'
}

@Component({
  selector: 'app-ghost-slider',
  templateUrl: './ghost-slider.component.html',
  styleUrls: ['./ghost-slider.component.sass']
})
export class GhostSliderComponent implements AfterViewInit {

  @ViewChild('slider', { static: false })
  private _slider: ElementRef;

  private _normalizedValueAtDragStart: number;
  private _xAtDragStart: number;

  private _value = 30;
  public normalizedValue = 0.3;
  private _valueChange: EventEmitter<number> = new EventEmitter();

  public state = DragState.None;

  @Input()
  public set value(value: number) {
    if (this.value === value) {
      return;
    }

    this._value = value;
    this.normalizedValue = (value - this.min) / (this.max - this.min);
    this._valueChange.next(this.value);
  }

  public get value(): number {
    return this._value;
  }

  @Output()
  public get valueChange(): Observable<number> {
    return this._valueChange;
  }

  @Input()
  public min = 0;

  @Input()
  public max = 100;

  @Input()
  public step = 1;

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterViewInit() {

    // d3 handles nicely both mouse and touch, in addition to triggering 'end' if the drag stops
    // outside the element.
    d3.select(this._slider.nativeElement)
      .call(d3.drag()
        .on('start', () => this.onDragStart(d3.event))
        .on('drag', () => this.onDrag(d3.event))
        .on('end', () => this.onDragEnd(d3.event)));
  }

  onDragStart(e: MouseEvent) {
    this.state = DragState.Holding;
    this._normalizedValueAtDragStart = this.normalizedValue;
    this._xAtDragStart = e.x;
  }

  onDrag(e: MouseEvent) {
    this.state = DragState.Dragging;
    const speed = 2;
    const width = this._slider.nativeElement.clientWidth;
    this.normalizedValue = this._normalizedValueAtDragStart + speed * (e.x - this._xAtDragStart) / width;

    // If user pushes the bar to the edge (and beyond) and then back we want the return movement
    // to give an immediate effect so we adjust dragstart to reflect that
    if (this.normalizedValue < 0) {
      this._xAtDragStart = e.x + this._normalizedValueAtDragStart * width / speed;
      this.normalizedValue = 0;
    }
    if (this.normalizedValue > 1) {
     this._xAtDragStart = e.x - (1 - this._normalizedValueAtDragStart) * width / speed;
     this.normalizedValue = 1;
    }

    this._value = Utils.roundToStep(this.normalizedValue * (this.max - this.min) + this.min, this.step);
    this._valueChange.next(this.value);
  }

  onDragEnd(e: MouseEvent) {
    this.state = DragState.None;
  }

  public get background() {
    const gradient =
    `linear-gradient(to right, white ${this.normalizedValue * 100}%, black ${this.normalizedValue * 100}%)`;

    return this.sanitizer.bypassSecurityTrustStyle(gradient);
  }
}
