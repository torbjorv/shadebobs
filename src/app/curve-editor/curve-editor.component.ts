import { Component, OnInit, ViewChild, ElementRef, OnChanges, Output, Input } from '@angular/core';
import * as d3 from 'd3';
import { CardinalCurve } from '../cardinal-curve';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-curve-editor',
  templateUrl: './curve-editor.component.html',
  styleUrls: ['./curve-editor.component.sass']
})
export class CurveEditorComponent implements OnChanges {

  @ViewChild('chart', { static: false })
  private _chartContainer: ElementRef;

  private _points: [number, number][] = [];
  private _pointsChange: Subject<[number, number][]> = new Subject();

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
    setTimeout(() => this.svgSize = [contentWidth, contentHeight - 4]);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.onResize();
    this.updateSvg();
  }

  ngOnChanges() {
    if (!this.isInitialized) {
      return;
    }
    
    this.updateSvg();
  }

  public get isInitialized(): boolean {
    return this._chartContainer != undefined;
  }

  public getCurve(numPoints: number):number[] {

    let r = CardinalCurve.build(this.points, 0.5, numPoints);
    return r;
  }

  public get svgCurve(): string {

    let lineGenerator: any = d3.line()
      .curve(d3.curveMonotoneX);

    let p = this.points.map(p => this.toSvg(p));

    return lineGenerator(p);
  }

  public toWorld(p: [number, number]): [number, number] {
    let worldSize = [this.world[1][0] - this.world[0][0], this.world[1][1] - this.world[0][1]];
    let normalizedScreen: [number, number] = [p[0]/this.svgSize[0], (this.svgSize[1] - p[1])/this.svgSize[1]];

    return [
      this.world[0][0] + worldSize[0] * normalizedScreen[0], 
      this.world[0][1] + worldSize[1] * normalizedScreen[1]];
  }

  public toSvg(p: [number, number]): [number, number] {
    let worldSize = [this.world[1][0] - this.world[0][0], this.world[1][1] - this.world[0][1]];
    return [
      this.svgSize[0] * (p[0] - this.world[0][0]) / worldSize[0], 
      this.svgSize[1] * (this.world[1][1] - p[1]) / worldSize[1]];
  }

  public get svgViewBox(): string {
    return `0 0 ${this.svgSize[0]} ${this.svgSize[1]}`;
  }

  private updateSvg(): void {

    // This is just a hack so we can use D3's drag-features
    d3.select(this._chartContainer.nativeElement).select('svg')
      .selectAll('circle')
      .data(this.points)
      .call(d3.drag<SVGCircleElement, [number, number]>()
        .on("drag", (d, i) => this.move(d, this.toWorld([d3.event.x, d3.event.y]), this.world))
        .on("end", (d, i) => this.active[i] = false));
  }

  private move(p: [number, number], to: [number, number], limits:[[number, number], [number, number]] = undefined): void {

    // set the individual properties because the template is binding to the x/y, not the Point
    // instance.
    p[0] = to[0];
    p[1] = to[1];

    if (limits) {
      p[0] = Math.min(Math.max(p[0], limits[0][0]), limits[1][0]); 
      p[1] = Math.min(Math.max(p[1], limits[0][1]), limits[1][1]); 
    }
    
    this._points = [...this._points.sort((p0, p1) => p0[0] - p1[0])];
    this._pointsChange.next(this._points);
  }
}
