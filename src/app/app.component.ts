import { Component, Inject, ViewChild } from '@angular/core';
import { Settings } from './settings';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { skip, first } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SettingsComponent } from './settings/settings.component';
import { RendererComponent } from './renderer/renderer.component';
import { Fullscreen2Service as FullscreenService } from './utils/fullscreen.service';

export enum ColorTheme {
  dark = 'dark',
  light = 'light'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('true', style({
        opacity : 1
      })),
      state('false', style({
        opacity: 0,
      })),
      transition('false => true', [
        animate('0.1s')
      ]),
      transition('true => false', [
        animate('1s')
      ])
    ]),
  ]
})
export class AppComponent {
  settings: Settings;
  settingsVisible: boolean;

  private _settingsTimeout: any;

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
    @Inject(DOCUMENT) private document: HTMLDocument,
    private fullscreen: FullscreenService) {

    this._defaultRed = [];
    this._defaultGreen = [];
    this._defaultBlue = [];

    const c = 10;
    for (let i = 0; i <= c; i++) {
      this._defaultRed.push([i * (100 / c), (i / c) * 255]);
      this._defaultGreen.push([i * (100 / c), (i / c) * 255]);
      this._defaultBlue.push([i * (100 / c), (i / c) * 255]);
    }

    this.showSettings();
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

    this.document.addEventListener('mousedown', () => this.showSettings(), {capture: true});
    this.document.addEventListener('mousemove', () => this.showSettings(), {capture: true});
    this.document.addEventListener('mouseup', () => this.showSettings(), true);
    this.document.addEventListener('drag', () => this.showSettings(), true);
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

  public showSettings() {
    this.settingsVisible = true;

    if (this._settingsTimeout) {
      clearTimeout(this._settingsTimeout);
    }

    this._settingsTimeout = setTimeout(() => this.settingsVisible = false, 5000);
  }
}
