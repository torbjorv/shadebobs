import { Component } from '@angular/core';
import { Settings } from './settings';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { skip, first } from 'rxjs/operators';
import { CardinalCurve } from './curve-editor/cardinal-curve';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shadebobs';

  settings: Settings;
  settingsVisible: boolean = false;

  private _defaultRed: [number, number][] =
    [
      [0, 180],
      [30, 255],
      [50, 127],
      [75, 36],
      [100, 0],
    ];

  private _defaultGreen: [number, number][] =
    [
      [0, 180],
      [30, 255],
      [50, 127],
      [75, 25],
      [100, 0],
    ];

  private _defaultBlue: [number, number][] = [
    [0, 255],
    [30, 255],
    [50, 130],
    [75, 120],
    [100, 0],
  ];

  private _defaultTail = 40000;
  private _defaultCount = 8;
  private _defaultSpeed = 3.5;
  private _defaultSize = 10;
  private _defaultForce = 3;




  public constructor(private router: Router, private route: ActivatedRoute) {

    this.settings = new Settings(
      this._defaultTail, 
      this._defaultCount, 
      this._defaultSpeed, 
      this._defaultSize, 
      this._defaultForce, 
      this._defaultRed, 
      this._defaultGreen, 
      this._defaultBlue      
    );

    // This is a BehaviorSubject so first value is always empty, then we just get the initial
    // values from the URL. The URL is updated through the settings, so it will keep changing.
    this.route.queryParamMap.pipe(skip(1), first()).subscribe(params => {
      this.settings.red = this.getColorOrDefault(params, 'red', this.settings.red);
      this.settings.green = this.getColorOrDefault(params, 'green', this.settings.green);
      this.settings.blue = this.getColorOrDefault(params, 'blue', this.settings.blue);

      this.settings.tail = this.getValueOrDefault(params, 'tail', this.settings.tail);
      this.settings.count = this.getValueOrDefault(params, 'count', this.settings.count);
      this.settings.speed = this.getValueOrDefault(params, 'speed', this.settings.speed);
      this.settings.size = this.getValueOrDefault(params, 'size', this.settings.size);
      this.settings.force = this.getValueOrDefault(params, 'force', this.settings.force);
    });

    window.setInterval(() => {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: this.settings }
      );
    }, 1000);
  }

  private getValueOrDefault<T>(map: ParamMap, key: string, defaultValue: T): T {
    return map.has(key) ? <T>(map.get(key) as any) : defaultValue;
  }

  private getColorOrDefault(map: ParamMap, key: string, defaultValue: [number, number][]): [number, number][] {
    if (!map.has(key)) {
      return defaultValue;
    }

    let a = map.getAll(key);
    return a.map(s => s.split(',').map(e => parseInt(e))) as any;
  }

  public toggleSettings() {
    this.settingsVisible = !this.settingsVisible;
  }


  public get settingsIconColor(): string {
    if (this.settingsVisible) {
      return "black";
    } else {
      let firstR = CardinalCurve.getCurvePoints2(this.settings.red, 0.5, 2)[0];
      let firstG = CardinalCurve.getCurvePoints2(this.settings.green, 0.5, 2)[0];
      let firstB = CardinalCurve.getCurvePoints2(this.settings.blue, 0.5, 2)[0];
      let sum = firstR + firstG + firstB;
      return sum > 350 ? "black" : "white";
    }
  }
}
