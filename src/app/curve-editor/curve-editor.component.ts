import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { CardinalCurve } from './cardinal-curve';
import { Point } from './point';


class ControlPoint {

  public active: boolean = false;

  constructor(public world: Point) { }

  public move(to: Point, limits:[[number, number], [number, number]] = undefined): void {

    // set the individual properties because the template is binding to the x/y, not the Point
    // instance.
    this.world.x = to.x;
    this.world.y = to.y;

    if (limits) {
      this.world.x = Math.min(Math.max(this.world.x, limits[0][0]), limits[1][0]); 
      this.world.y = Math.min(Math.max(this.world.y, limits[0][1]), limits[1][1]); 
    }
  }
}

@Component({
  selector: 'app-curve-editor',
  templateUrl: './curve-editor.component.html',
  styleUrls: ['./curve-editor.component.sass']
})
export class CurveEditorComponent implements OnChanges {

  @ViewChild('chart', { static: false })
  private chartContainer: ElementRef;

  world: [[number, number], [number, number]] = [[0, 0], [100, 255]];
  public svgSize: [number, number] = [10, 10];

  points = [
    new ControlPoint(new Point(0, 0)),
    new ControlPoint(new Point(30, 150)),
    new ControlPoint(new Point(40, 255)),
    new ControlPoint(new Point(60, 255)),
    new ControlPoint(new Point(100, 255)),
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
    console.log(this.chartContainer.nativeElement.clientWidth)
    console.log(this.chartContainer.nativeElement.clientHeight)

    this.onResize();
    this.updateSvg();
  }

  ngOnChanges() {
    this.updateSvg();
  }

  public getCurve(numPoints: number):number[] {

    let r = CardinalCurve.getCurvePoints2(this.points.map(d => d.world), 0.5, numPoints);

    return r;

    // let path = d3.select('path');

    // let svgLine: any = path.node();
    // let lineLength = svgLine.getTotalLength();
    // let interval;
    // if (numPoints === 1) {
    //   interval = 0;
    // } else {
    //   interval = lineLength / (numPoints - 1);
    // }
    // let values: number[] = d3.range(numPoints).map((d) => {
    //   let point = svgLine.getPointAtLength(d * interval);
    //   console.log(point)
    //   return Math.round(this.toWorld(new Point(point.x, point.y)).y);
    // });

    
    // return values;
  }

  public get svgCurve(): string {

    let lineGenerator: any = d3.line()
      .curve(d3.curveMonotoneX);

    let p = this.points
      .sort((p0, p1) => p0.world.x - p1.world.x)
      .map(p => this.toSvg(p.world))
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
    d3.select(this.chartContainer.nativeElement).select('svg')
      .selectAll('circle')
      .data(this.points)
      .call(d3.drag<SVGCircleElement, ControlPoint>()
        .on("start", (d) => d.active = true)
        .on("drag", (d) => d.move(this.toWorld(new Point(d3.event.x, d3.event.y)), this.world))
        .on("end", (d) => d.active = false));
  }
}
