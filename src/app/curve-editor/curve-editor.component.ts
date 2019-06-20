import { Component, OnInit, ViewChild, ElementRef, OnChanges, Output } from '@angular/core';
import * as d3 from 'd3';
import { CardinalCurve } from './cardinal-curve';
import { Point } from './point';
import { EventEmitter } from 'protractor';
import { Subject, Observable } from 'rxjs';


@Component({
  selector: 'app-curve-editor',
  templateUrl: './curve-editor.component.html',
  styleUrls: ['./curve-editor.component.sass']
})
export class CurveEditorComponent implements OnChanges {

  @ViewChild('chart', { static: false })
  private chartContainer: ElementRef;

  private _onChanged: Subject<[number, number][]> = new Subject();

  @Output('controlPoints')
  public get onChanged(): Observable<[number, number][]> {
    return this._onChanged;
  }

  world: [[number, number], [number, number]] = [[0, 0], [100, 255]];
  public svgSize: [number, number] = [10, 10];

  active: boolean[] = [false, false, false, false, false];

  points = [
    new Point(0, 0),
    new Point(30, 150),
    new Point(40, 255),
    new Point(60, 255),
    new Point(100, 255),
  ]
  constructor() { }

  onResize() {

    const element = this.chartContainer.nativeElement;

    const contentWidth = element.clientWidth;
    const contentHeight = element.clientHeight;

    // Unless I subtract 4 here, the svg area will keep growing for every onResize. No idea where those 4 pixels
    // are coming from (it's not padding/margin).
    setTimeout(() => this.svgSize = [contentWidth, contentHeight - 4]);
  }

  ngOnInit() { 
  }

  ngAfterViewInit() {
    this.onResize();
    this.updateSvg();
  }

  ngOnChanges() {
    this.updateSvg();
  }

  public getCurve(numPoints: number):number[] {

    let r = CardinalCurve.getCurvePoints2(this.points, 0.5, numPoints);
    return r;
  }

  public get svgCurve(): string {

    let lineGenerator: any = d3.line()
      .curve(d3.curveMonotoneX);

    let p = this.points
      .sort((p0, p1) => p0.x - p1.x)
      .map(p => this.toSvg(p))
      .map(p => [p.x, p.y]);

    return lineGenerator(p);
  }

  public toWorld(p: Point): Point {
    let worldSize = [this.world[1][0] - this.world[0][0], this.world[1][1] - this.world[0][1]];

    let normalizedScreen: Point = new Point(p.x/this.svgSize[0], (this.svgSize[1] - p.y)/this.svgSize[1]);

    return new Point(
      this.world[0][0] + worldSize[0] * normalizedScreen.x, 
      this.world[0][1] + worldSize[1] * normalizedScreen.y);
  }

  public toSvg(p: Point): Point {
    let worldSize = [this.world[1][0] - this.world[0][0], this.world[1][1] - this.world[0][1]];
    return new Point(
      this.svgSize[0] * (p.x - this.world[0][0]) / worldSize[0], 
      this.svgSize[1] * (this.world[1][1] - p.y) / worldSize[1]);
  }

  public get svgViewBox(): string {
    return `0 0 ${this.svgSize[0]} ${this.svgSize[1]}`;
  }

  private updateSvg(): void {

    // This is just a hack so we can use D3's drag-features
    d3.select(this.chartContainer.nativeElement).select('svg')
      .selectAll('circle')
      .data(d3.range(this.points.length))
      .call(d3.drag<SVGCircleElement, number>()
        .on("drag", (d, i) => { console.log(d3.event.x); 
          this.move(i, this.toWorld(new Point(d3.event.x, d3.event.y)), this.world);
         })
        .on("end", (d, i) => this.active[i] = false));
  }

  private move(i: number, to: Point, limits:[[number, number], [number, number]] = undefined): void {

    // set the individual properties because the template is binding to the x/y, not the Point
    // instance.
    this.points[i].x = to.x;
    this.points[i].y = to.y;

    if (limits) {
      this.points[i].x = Math.min(Math.max(this.points[i].x, limits[0][0]), limits[1][0]); 
      this.points[i].y = Math.min(Math.max(this.points[i].y, limits[0][1]), limits[1][1]); 
    }

    this._onChanged.next(this.points.map(p => p.toArray()));
  }
}
