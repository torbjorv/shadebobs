import { Component, OnInit, ViewChild, ElementRef, Output, Input } from '@angular/core';
import { CurveEditorComponent } from '../curve-editor/curve-editor.component';
import { Subject, Observable } from 'rxjs';
import { CardinalCurve } from '../cardinal-curve';

@Component({
  selector: 'app-palette-editor',
  templateUrl: './palette-editor.component.html',
  styleUrls: ['./palette-editor.component.sass']
})
export class PaletteEditorComponent implements OnInit {

  private _redPoints: [number, number][] = [];
  @Input()
  public set redPoints(value: [number, number][]) {
    this._redPoints = value;
    this._redPointsChange.next(value);
  }

  public get redPoints(): [number, number][] {
    return this._redPoints;
  }

  private _redPointsChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get redPointsChange(): Observable<[number, number][]> {
    return this._redPointsChange;
  }

  private _greenPoints: [number, number][] = [];
  @Input()
  public set greenPoints(value: [number, number][]) {
    this._greenPoints = value;
    this._greenPointsChange.next(value);
  }
  public get greenPoints(): [number, number][] {
    return this._greenPoints;
  }

  private _greenPointsChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get greenPointsChange(): Observable<[number, number][]> {
    return this._greenPointsChange;
  }

  private _bluePoints: [number, number][] = [];
  @Input()
  public set bluePoints(value: [number, number][]) {
    this._bluePoints = value;
    this._bluePointsChange.next(value);
  }
  public get bluePoints(): [number, number][] {
    return this._bluePoints;
  }

  private _bluePointsChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get bluePointsChange(): Observable<[number, number][]> {
    return this._bluePointsChange;
  }

  public getCurveR() {
    return CardinalCurve.build(this.redPoints, 0.5, 100);
  }

  public getCurveG() {
    return CardinalCurve.build(this.greenPoints, 0.5, 100);
  }

  public getCurveB() {
    return CardinalCurve.build(this.bluePoints, 0.5, 100);
  }

  public mixed(): [number, number, number][] {

    let r = this.getCurveR();
    let g = this.getCurveG();
    let b = this.getCurveB();

    let result = [];
    for (let i = 0; i < r.length; i++) {
      result.push([r[i], g[i], b[i]]);
    }
    return result;
  }

  constructor() { }

  ngOnInit() { }
}
