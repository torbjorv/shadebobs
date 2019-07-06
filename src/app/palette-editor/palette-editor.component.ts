import { Component, OnInit, ViewChild, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { CurveEditorComponent } from '../curve-editor/curve-editor.component';
import { Subject, Observable } from 'rxjs';
import { CardinalCurve } from '../cardinal-curve';

@Component({
  selector: 'app-palette-editor',
  templateUrl: './palette-editor.component.html',
  styleUrls: ['./palette-editor.component.sass']
})
export class PaletteEditorComponent implements OnInit {

  public gradientR: {};
  public gradientG: {};
  public gradientB: {};
  public gradient: {};

  private _red: [number, number][] = [];
  @Input()
  public set red(value: [number, number][]) {
    this._red = value;
    this._redChange.next(value);
  }

  public get red(): [number, number][] {
    return this._red;
  }

  private _redChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get redChange(): Observable<[number, number][]> {
    return this._redChange;
  }

  private _green: [number, number][] = [];
  @Input()
  public set green(value: [number, number][]) {
    this._green = value;
    this._greenChange.next(value);
  }
  public get green(): [number, number][] {
    return this._green;
  }

  private _greenChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get greenChange(): Observable<[number, number][]> {
    return this._greenChange;
  }

  private _blue: [number, number][] = [];
  @Input()
  public set blue(value: [number, number][]) {
    this._blue = value;
    this._blueChange.next(value);
  }
  public get blue(): [number, number][] {
    return this._blue;
  }

  private _blueChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get blueChange(): Observable<[number, number][]> {
    return this._blueChange;
  }

  constructor() {
    this.redChange.subscribe(() => this.updatePalettes());
    this.greenChange.subscribe(() => this.updatePalettes());
    this.blueChange.subscribe(() => this.updatePalettes());
  }

  ngOnInit() { }

  private updatePalettes() {
    const steps = 101;
    const paletteR = CardinalCurve.build(this.red, 0.5, steps);
    const paletteG = CardinalCurve.build(this.green, 0.5, steps);
    const paletteB = CardinalCurve.build(this.blue, 0.5, steps);

    this.gradientR = this.buildGradient(Array(steps).fill(255), Array(steps).fill(0), Array(steps).fill(0), paletteR.map(v => v / 255));
    this.gradientG = this.buildGradient(Array(steps).fill(0), Array(steps).fill(255), Array(steps).fill(0), paletteG.map(v => v / 255));
    this.gradientB = this.buildGradient(Array(steps).fill(0), Array(steps).fill(0), Array(steps).fill(255), paletteB.map(v => v / 255));
    this.gradient = this.buildGradient(paletteR, paletteG, paletteB, Array(steps).fill(1));
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
