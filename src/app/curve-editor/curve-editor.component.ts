import { Component, OnInit, ViewChild, ElementRef, OnChanges, Output, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { CardinalCurve } from '../cardinal-curve';
import { Subject, Observable } from 'rxjs';
import { SimplifyAP } from 'simplify-ts';
import { Utils } from '../utils';
import binarySearch from 'binary-search';


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
  private _allPoints: [number, number][];
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
    this._allPoints = this.points;
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
    // if (!this.isInitialized) {
    //   return;
    // }
  }

  public get isInitialized(): boolean {
    return this._chartContainer !== undefined;
  }

  public getCurve(numPoints: number): number[] {
    return CardinalCurve.build(this.points, 0.5, numPoints);
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
    this._previousDrag = this.toWorld([d3.event.x, d3.event.y]);
  }

  private onDrag(): void {

    const current = this.toWorld([d3.event.x, d3.event.y]);

    if (this.world) {
      current[0] = Math.min(Math.max(current[0], this.world[0][0]), this.world[1][0]);
      current[1] = Math.min(Math.max(current[1], this.world[0][1]), this.world[1][1]);
    }

    let currentIndex = binarySearch(this._allPoints, current, (a, b) => a[0] - b[0]);
    if (currentIndex < 0) {
      currentIndex = Math.abs(currentIndex) - 1;
    }
    let previousIndex = binarySearch(this._allPoints, this._previousDrag, (a, b) => a[0] - b[0]);
    if (previousIndex < 0) {
      previousIndex = Math.abs(previousIndex) - 1;
    }
    const left = Math.min(currentIndex, previousIndex);
    const right = Math.max(currentIndex, previousIndex);

    this._allPoints.splice(left, right - left, current);

    this._points = SimplifyAP(this._allPoints, 1);

    // const closest: [number, number] =
    //   this.points.reduce((current, next) => Math.abs(current[0] - current[0]) < Math.abs(current[0] - next[0]) ? current : next);

    // // set the individual properties because the template is binding to the x/y, not the Point
    // // instance.
    // closest[1] = current[1];

    // if (this.world) {
    //   closest[0] = Math.min(Math.max(closest[0], this.world[0][0]), this.world[1][0]);
    //   closest[1] = Math.min(Math.max(closest[1], this.world[0][1]), this.world[1][1]);
    // }



    // this._points = [...this._points.sort((p0, p1) => p0[0] - p1[0])];
    this._pointsChange.next(this._points);
    this._previousDrag = current;
  }

  private onDragEnd(): void {
    this._previousDrag = null;
  }
}
