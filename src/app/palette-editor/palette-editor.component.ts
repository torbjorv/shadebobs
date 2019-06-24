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

  public getCurveR() {
    return CardinalCurve.build(this.red, 0.5, 100);
  }

  public getCurveG() {
    return CardinalCurve.build(this.green, 0.5, 100);
  }

  public getCurveB() {
    return CardinalCurve.build(this.blue, 0.5, 100);
  }

  public mixed(): [number, number, number][] {

    const r = this.getCurveR();
    const g = this.getCurveG();
    const b = this.getCurveB();

    const result = [];
    for (let i = 0; i < r.length; i++) {
      result.push([r[i], g[i], b[i]]);
    }
    return result;
  }

  constructor() { }

  ngOnInit() { }
}
