import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs';
import { Utils } from '../utils';

@Component({
  selector: 'app-ghost-slider',
  templateUrl: './ghost-slider.component.html',
  styleUrls: ['./ghost-slider.component.sass'],
  animations: [
    trigger('focusBar', [
      state('true', style({
        opacity: 0.2,
      })),
      state('false', style({
        opacity: 0.0,
      })),
      transition('true => false', [
        animate('0.2s')
      ]),
      transition('false => true', [
        animate('0.1s')
      ]),
    ]),
    trigger('focusLabel', [
      state('true', style({
        'font-size': '15pt',
      })),
      state('false', style({
        'font-size': '10pt',
      })),
      transition('true => false', [
        animate('0.2s')
      ]),
      transition('false => true', [
        animate('0.1s')
      ]),
    ]),
  ],
})
export class GhostSliderComponent implements AfterViewInit {

  @ViewChild('container', { static: false })
  private _container: ElementRef;

  private _normalizedValueAtDragStart: number;
  private _xAtDragStart: number;

  private _value = 30;
  public normalizedValue = 0.3;
  private _valueChange: EventEmitter<number> = new EventEmitter();

  public hasFocus = false;

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

  @Input()
  public label = 'label';

  constructor() { }

  ngAfterViewInit() {

    // d3 handles nicely both mouse and touch, in addition to triggering 'end' if the drag stops
    // outside the element.
    d3.select(this._container.nativeElement)
      .call(d3.drag()
        .on('start', () => this.onDragStart(d3.event))
        .on('drag', () => this.onDrag(d3.event))
        .on('end', () => this.onDragEnd(d3.event)));
  }

  onDragStart(e: MouseEvent) {
    this._normalizedValueAtDragStart = this.normalizedValue;
    this._xAtDragStart = e.x;
    this.hasFocus = true;
  }

  onDrag(e: MouseEvent) {
    const before = this.normalizedValue;

    this.normalizedValue = this._normalizedValueAtDragStart + 2 * (e.x - this._xAtDragStart) / this._container.nativeElement.clientWidth;
    this.normalizedValue = Math.max(Math.min(1, this.normalizedValue), 0);

    const k = this.normalizedValue * (this.max - this.min) + this.min;

    this._value = Utils.nearest(k, this.min, this.max, (this.max - this.min) / this.step);
    this._valueChange.next(this.value);
  }

  onDragEnd(e: MouseEvent) {
    this.hasFocus = false;
  }
}
