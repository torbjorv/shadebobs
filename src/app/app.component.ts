import { Component, ViewChild, Inject } from '@angular/core';
import { Settings } from './settings';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { skip, first } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { RendererComponent } from './renderer/renderer.component';
import { DOCUMENT } from '@angular/common';


export enum ColorTheme {
  dark = 'dark',
  light = 'light'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shadebobs';

  settings: Settings;
  settingsVisible = true;
  isFullscreen = false;

  private _defaultRed: [number, number][] =
    [
      [0, 180],
      [10, 255],
      [20, 127],
      [30, 36],
      [40, 0],
      [50, 180],
      [60, 255],
      [70, 127],
      [80, 36],
      [90, 0],
      [100, 0]
    ];

  private _defaultGreen: [number, number][] =
    [
      [0, 180],
      [10, 255],
      [20, 127],
      [30, 25],
      [40, 0],
      [50, 180],
      [60, 255],
      [70, 127],
      [80, 25],
      [90, 0],
      [100, 0],
    ];

  private _defaultBlue: [number, number][] = [
    [0, 255],
    [10, 255],
    [20, 130],
    [30, 120],
    [40, 0],
    [50, 255],
    [60, 255],
    [70, 130],
    [80, 120],
    [90, 0],
    [100, 0],
  ];

  private _defaultTail = 40000;
  private _defaultCount = 8;
  private _defaultSpeed = 3.5;
  private _defaultSize = 10;
  private _defaultForce = 3;

  public redActive = false;
  public greenActive = false;
  public blueActive = false;

  @ViewChild('renderer', { static: false })
  public renderer: RendererComponent;

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: any) {

    this._defaultRed = [];
    this._defaultGreen = [];
    this._defaultBlue = [];

    const c = 10;
    for (let i = 0; i <= c; i++) {
      this._defaultRed.push([i * (100 / c), (i / c) * 255]);
      this._defaultGreen.push([i * (100 / c), (i / c) * 255]);
      this._defaultBlue.push([i * (100 / c), (i / c) * 255]);
    }

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
    return map.has(key) ? map.get(key) as any as T : defaultValue;
  }

  private getColorOrDefault(map: ParamMap, key: string, defaultValue: [number, number][]): [number, number][] {
    if (!map.has(key)) {
      return defaultValue;
    }

    return map.getAll(key).map(s => s.split(',').map(e => parseInt(e, 10))) as any;
  }

  public toggleSettings() {
    this.settingsVisible = !this.settingsVisible;
  }

  public get colorTheme(): ColorTheme {
    const firstR = this.settings.red[0][1];
    const firstG = this.settings.green[0][1];
    const firstB = this.settings.blue[0][1];
    const sum = firstR + firstG + firstB;
    return sum > 350 ? ColorTheme.dark : ColorTheme.light;
  }

  public get background() {
    const C = (this.colorTheme === ColorTheme.dark) ? 255 : 0;

    const gradient = `radial-gradient(at bottom right,rgba(${C}, ${C}, ${C}, 0) 36%, rgba(${C}, ${C}, ${C}, 0.9) 44%)`;

    return this.sanitizer.bypassSecurityTrustStyle(gradient);
  }

  public openGithub() {
    window.location.href = 'https://github.com/torbjorv/shadebobs';
  }

  enterFullscreen() {
    const elem = document.documentElement as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
    this.isFullscreen = true;
  }

  /* Close fullscreen */
  exitFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
    this.isFullscreen = false;
  }
}
