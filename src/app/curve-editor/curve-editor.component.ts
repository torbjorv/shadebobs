import { Component, OnInit, ViewChild, ElementRef, OnChanges, Output, Input, AfterViewInit, ɵsetCurrentInjector } from '@angular/core';
import * as d3 from 'd3';
import { Subject, Observable } from 'rxjs';
import { SimplifyAP } from 'simplify-ts';
import { Utils } from '../utils';


@Component({
  selector: 'app-curve-editor',
  templateUrl: './curve-editor.component.html',
  styleUrls: ['./curve-editor.component.sass']
})
export class CurveEditorComponent implements OnChanges, AfterViewInit, OnInit {

  @ViewChild('chart', { static: false })
  private _chartContainer: ElementRef;

  private _points: [number, number][] = [];
  private _pointsChange: Subject<[number, number][]> = new Subject();
  private _dragPoints: [number, number][];
  private _previousDrag: [number, number];

  @Input()
  public set points(value: [number, number][]) {
    if (!value) {
      return;
    }
    this._points = value;
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
    const element = this._chartContainer.nativeElement;

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

    d3.select(this._chartContainer.nativeElement).select('svg')
    .call(d3.drag()
      .on('start', () => this.onDragStart())
      .on('drag', () => this.onDrag())
      .on('end', () => this.onDragEnd()));
  }

  ngOnChanges() {
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
    // this._previousDrag = this.toWorld([d3.event.x, d3.event.y]);

    const current = this.toWorld([d3.event.x, d3.event.y]);

    if (this.world) {
      current[0] = Math.min(Math.max(current[0], this.world[0][0]), this.world[1][0]);
      current[1] = Math.min(Math.max(current[1], this.world[0][1]), this.world[1][1]);
    }

    Utils.setPoint(this._dragPoints, current);
    this._points = SimplifyAP(this._dragPoints, 2);
    this._pointsChange.next(this._points);
    this._previousDrag = current;

    // this.insert2(current, current);
  }

  private onDrag(): void {

    const current = this.toWorld([d3.event.x, d3.event.y]);

    if (this.world) {
      current[0] = Math.min(Math.max(current[0], this.world[0][0]), this.world[1][0]);
      current[1] = Math.min(Math.max(current[1], this.world[0][1]), this.world[1][1]);
    }

    Utils.setRange(this._dragPoints, this._previousDrag, current);

    this._points = SimplifyAP(this._dragPoints, 2);
    this._pointsChange.next(this._points);
    this._previousDrag = current;

    // this.insert2(this._previousDrag, current);

//    this.insert(current[0], current[1], this._previousDrag[0]);

    // const left = (current[0] <= this._previousDrag[0]) ? current : this._previousDrag;
    // const right = (current[0] > this._previousDrag[0]) ? current : this._previousDrag;

    // console.log(`x: ${d3.event.x} r: ${right} ${this.world[1][0]}`);
    
    // let leftIndex = binarySearch(this._dragPoints, left, (a, b) => a[0] - b[0]);
    // let rightIndex = binarySearch(this._dragPoints, right, (a, b) => a[0] - b[0]);

    // leftIndex = leftIndex < 0 ? Math.abs(leftIndex) - 1 : leftIndex;
    // rightIndex = rightIndex < 0 ? Math.abs(rightIndex) - 1 : rightIndex + 1;

    // this._dragPoints.splice(leftIndex, (rightIndex - leftIndex), left, right);
    // this._points = SimplifyAP(this._dragPoints, 2);

    // this._pointsChange.next(this._points);
    // this._previousDrag = current;
  }

  private onDragEnd(): void {
    this._previousDrag = null;
  }
}
