import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { CurveEditorComponent } from '../curve-editor/curve-editor.component';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-palette-editor',
  templateUrl: './palette-editor.component.html',
  styleUrls: ['./palette-editor.component.sass']
})
export class PaletteEditorComponent implements OnInit {

  @ViewChild('blue', { static: false })
  public blueCurve: CurveEditorComponent;

  @ViewChild('red', { static: false })
  public redCurve: CurveEditorComponent;

  @ViewChild('green', { static: false })
  public greenCurve: CurveEditorComponent;

  private _onChanged: Subject<[number[], number[], number[]]> = new Subject();
  @Output('palette')
  public get onChanged(): Observable<[number[], number[], number[]]> {
    return this._onChanged;
  }

  public mixed(count: number): [number, number, number][] {

    let r = this.redCurve.getCurve(count);
    let g = this.greenCurve.getCurve(count);
    let b = this.blueCurve.getCurve(count);

    let result = [];
    for (let i = 0; i < r.length; i++) {
      result.push([r[i], g[i], b[i]]);
    }
    return result;
  }

  constructor() { }

  ngOnInit() {
  }

  public raisePaletteChanged(){
    this._onChanged.next([this.redCurve.getCurve(100), this.greenCurve.getCurve(100), this.blueCurve.getCurve(100)]);
  }
}
