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

  settings: Settings = new Settings();
  settingsVisible: boolean = false;

  private _defaultRed: [number, number][] =
    [
      [0, 0],
      [30, 255],
      [50, 255],
      [75, 120],
      [100, 100],
    ];

  private _defaultGreen: [number, number][] =
    [
      [0, 0],
      [30, 255],
      [40, 255],
      [75, 120],
      [100, 100],
    ];

  private _defaultBlue: [number, number][] = [
    [0, 80],
    [40, 80],
    [50, 255],
    [75, 120],
    [100, 255],
  ];




  public constructor(private router: Router, private route: ActivatedRoute) {

    // This is a BehaviorSubject so first value is always empty, then we just get the initial
    // values from the URL. The URL is updated through the settings, so it will keep changing.
    this.route.queryParamMap.pipe(skip(1), first()).subscribe(params => {
      this.settings.red = this.getColorOrDefault(params, 'red', this._defaultRed);
      this.settings.green = this.getColorOrDefault(params, 'green', this._defaultGreen);
      this.settings.blue = this.getColorOrDefault(params, 'blue', this._defaultBlue);

      this.settings.tail = this.getValueOrDefault(params, 'tail', 40000);
      this.settings.count = this.getValueOrDefault(params, 'count', 7);
      this.settings.speed = this.getValueOrDefault(params, 'speed', 8);
      this.settings.size = this.getValueOrDefault(params, 'size', 10);
      this.settings.force = this.getValueOrDefault(params, 'force', 4);
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
