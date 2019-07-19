import { Component, OnInit, ViewChild, ElementRef, Output, Input, AfterViewInit, DoCheck } from '@angular/core';
import * as d3 from 'd3';
import { Subject, Observable } from 'rxjs';
import { SimplifyAP } from 'simplify-ts';
import { Utils } from '../utils/utils';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CardinalCurve } from '../cardinal-curve';

enum DragState {
  None = 'None',
  Holding = 'Holding',
  Dragging = 'Dragging'
}

@Component({
  selector: 'app-ghost-curve',
  templateUrl: './ghost-curve.component.html',
  styleUrls: ['./ghost-curve.component.sass'],
  animations: [
    trigger('expandCollapse', [
      state('Holding, Dragging', style({
        width: '100%',
        height: '100%',
        top: 0
      })),
      state('None, void', style({
        width: '75px',
        height: '20px',
        top: '10px'
      })),
      transition('* <=> *', [
        animate('0.2s ease-in-out')
      ])
    ])
  ]
})
export class GhostCurveComponent implements OnInit, AfterViewInit, DoCheck {

  public gradient: {};

  public expanded = false;

  @ViewChild('svg', { static: false })
  private _svg: ElementRef;

  @ViewChild('container', { static: false })
  private _container: ElementRef<HTMLElement>;

  private _points: [number, number][] = [];
  private _pointsChange: Subject<[number, number][]> = new Subject();
  private _dragPoints: [number, number][];
  private _previousDrag: [number, number];
  public state = DragState.None;

  @Input()
  public channel = 'R';

  @Input()
  public set points(value: [number, number][]) {
    if (!value) {
      return;
    }
    this._points = value;
    this.updatePalettes();
  }

  public get points(): [number, number][] {
    return this._points;
  }

  @Output()
  public get pointsChange(): Observable<[number, number][]> {
    return this._pointsChange;
  }

  world: [[number, number], [number, number]] = [[0, 0], [100, 255]];
  public svgSize: [number, number] = [10, 10];

  active: boolean[] = [false, false, false, false, false];

  constructor() { }

  onResize() {
    const element = this._svg.nativeElement;

    const contentWidth = element.clientWidth;
    const contentHeight = element.clientHeight;

    // Unless I subtract 4 here, the svg area will keep growing for every onResize. No idea where those 4 pixels
    // are coming from (it's not padding/margin).
    setTimeout(() => this.svgSize = [contentWidth, contentHeight]);
  }

  ngOnInit() {
    this._dragPoints = this.points;
  }

  ngAfterViewInit() {
    this.onResize();

    d3.select(this._container.nativeElement)
      .call(d3.drag()
        .on('start', () => this.onDragStart())
        .on('drag', () => this.onDrag())
        .on('end', () => this.onDragEnd()));
  }

  ngDoCheck(): void {

    if (this._svg) {
      const contentWidth = this._svg.nativeElement.clientWidth;
      const contentHeight = this._svg.nativeElement.clientHeight;

      if (contentWidth !== this.svgSize[0] || contentHeight !== this.svgSize[1]) {
        this.onResize();
      }
    }
  }

  public get svgCurve(): string {

    const lineGenerator: any = d3.line()
      .curve(d3.curveMonotoneX);

    const svgPoints = this.points.map(p => this.toSvg(p));

    return lineGenerator(svgPoints);
  }

  public toWorld(p: [number, number]): [number, number] {
    const worldSize = [this.world[1][0] - this.world[0][0], this.world[1][1] - this.world[0][1]];
    const normalizedScreen: [number, number] = [p[0] / this.svgSize[0], (this.svgSize[1] - p[1]) / this.svgSize[1]];

    return [
      this.world[0][0] + worldSize[0] * normalizedScreen[0],
      this.world[0][1] + worldSize[1] * normalizedScreen[1]];
  }

  public toSvg(p: [number, number]): [number, number] {
    const worldSize = [this.world[1][0] - this.world[0][0], this.world[1][1] - this.world[0][1]];
    return [
      this.svgSize[0] * (p[0] - this.world[0][0]) / worldSize[0],
      this.svgSize[1] * (this.world[1][1] - p[1]) / worldSize[1]];
  }

  public get svgViewBox(): string {
    return `0 0 ${this.svgSize[0]} ${this.svgSize[1]}`;
  }

  private onDragStart(): void {
    this.state = DragState.Holding;
    const current = this.toWorld([d3.event.x, d3.event.y]);

    if (this.world) {
      current[0] = Math.min(Math.max(current[0], this.world[0][0]), this.world[1][0]);
      current[1] = Math.min(Math.max(current[1], this.world[0][1]), this.world[1][1]);
    }

    this._previousDrag = current;
  }

  private onDrag(): void {
    this.state = DragState.Dragging;
    const current = this.toWorld([d3.event.x, d3.event.y]);

    if (this.world) {
      current[0] = Math.min(Math.max(current[0], this.world[0][0]), this.world[1][0]);
      current[1] = Math.min(Math.max(current[1], this.world[0][1]), this.world[1][1]);
    }

    Utils.setRange(this._dragPoints, this._previousDrag, current);

    this._points = SimplifyAP(this._dragPoints, 2);
    this._pointsChange.next(this._points);
    this.updatePalettes();
    this._previousDrag = current;
  }

  private onDragEnd(): void {
    this.state = DragState.None;
    this._previousDrag = null;
  }

  private updatePalettes() {
    const steps = 101;
    const palette = CardinalCurve.build(this.points, 0.5, steps);

    switch (this.channel) {
      case 'R': this.gradient = this.buildGradient(palette, Array(steps).fill(0), Array(steps).fill(0), Array(steps).fill(1));
                break;
      case 'G': this.gradient = this.buildGradient(Array(steps).fill(0), palette, Array(steps).fill(0), Array(steps).fill(1));
                break;
      case 'B': this.gradient = this.buildGradient(Array(steps).fill(0), Array(steps).fill(0), palette, Array(steps).fill(1));
                break;
    }
  }

  public buildGradient(r: number[], g: number[], b: number[], a: number[]) {

    let value = 'linear-gradient(to right';
    for (let i = 0; i < r.length; i++) {
      value += `, rgba(${r[i]}, ${g[i]}, ${b[i]}, ${a[i]}) ${i}%`;
    }
    value += ')';
    return {
      background: value
    };
  }
}
