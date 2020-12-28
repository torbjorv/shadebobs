import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as d3 from 'd3';
import { Utils } from '../utils/utils';

enum DragState {
  None = 'None',
  Holding = 'Holding',
  Dragging = 'Dragging'
}

@Component({
  selector: 'app-ghost-slider',
  templateUrl: './ghost-slider.component.html',
  styleUrls: ['./ghost-slider.component.sass'],
  animations: [
    trigger('expandCollapseBar', [
      state('Holding, Dragging', style({
        width: '100%',
        height: '100%',
        bottom: 0
      })),
      state('None, void', style({
        width: '75px',
        height: '5px',
        bottom: '5px'
      })),
      transition('* <=> *', [
        animate('0.2s ease-in-out')
      ])
    ]),
    trigger('expandCollapseLabel', [
      state('Holding, Dragging', style({
        'font-size': '20pt',
        height: '100%'
      })),
      state('None, void', style({
        'font-size': '12pt',
        height: '30px',
      })),
      transition('* <=> *', [
        animate('0.2s ease-in-out')
      ])
    ]),
  ]
})
export class GhostSliderComponent implements OnInit, AfterViewInit {

  private _normalizedValueAtDragStart: number;
  private _xAtDragStart: number;

  @ViewChild('container')
  private _container: ElementRef<HTMLElement>;
  private _value = 30;
  private _valueChange: EventEmitter<number> = new EventEmitter();

  public state = DragState.None;

  public expanded = false;

  @Input()
  public label: string;

  @Input()
  public set value(value: number) {
    if (this.value === value) {
      return;
    }

    this._value = value;
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

  public get width(): string {
    return this._container ? `${this._container.nativeElement.clientWidth}px` : '100px';
  }

  constructor() { }

  ngOnInit() {
  }

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
    this.state = DragState.Holding;
    this._normalizedValueAtDragStart = this.normalize(this.value, this.min, this.max);
    this._xAtDragStart = e.x;
  }

  onDrag(e: MouseEvent) {
    this.state = DragState.Dragging;
    const speed = 2;
    const width = this._container.nativeElement.clientWidth;
    let normalizedValue = this._normalizedValueAtDragStart + speed * (e.x - this._xAtDragStart) / width;

    // If user pushes the bar to the edge (and beyond) and then back we want the return movement
    // to give an immediate effect so we adjust dragstart to reflect that
    if (normalizedValue < 0) {
      this._xAtDragStart = e.x + this._normalizedValueAtDragStart * width / speed;
      normalizedValue = 0;
    }
    if (normalizedValue > 1) {
     this._xAtDragStart = e.x - (1 - this._normalizedValueAtDragStart) * width / speed;
     normalizedValue = 1;
    }

    this._value = Utils.snap(normalizedValue * (this.max - this.min) + this.min, this.step);
    this._valueChange.next(this.value);
  }

  onDragEnd(e: MouseEvent) {
    this.state = DragState.None;
  }

  normalize(value: number, min: number, max: number): number {
    return (value - min) / (max - min);
  }
}
