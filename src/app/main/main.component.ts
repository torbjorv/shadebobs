import { Component, Inject, OnInit } from '@angular/core';
import { Settings } from '../settings';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Fullscreen2Service as FullscreenService } from '../utils/fullscreen.service';
import fastEqual from 'fast-deep-equal';

export enum ColorTheme {
  dark = 'dark',
  light = 'light'
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
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
export class MainComponent implements OnInit {

  settings: Settings = new Settings();
  settingsVisible: boolean;

  private _settingsTimeout: any;

  private _defaultRed: [number, number][] =
    [
      [0, 255],
      [25, 200],
      [40, 50],
      [70, 100],
      [100, 0]
    ];

  private _defaultGreen: [number, number][] =
    [
      [0, 255],
      [25, 200],
      [50, 50],
      [80, 200],
      [100, 255]
    ];

  private _defaultBlue: [number, number][] = [
    [0, 255],
    [25, 255],
    [40, 150],
    [70, 100],
    [100, 255]
  ];

  private _defaultTail = 20000;
  private _defaultCount = 8;
  private _defaultSpeed = 8.5;
  private _defaultSize = 10;
  private _defaultForce = 3;

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) public document: HTMLDocument,
    public fullscreen: FullscreenService) {


  }

  private getNumberOrDefault(map: ParamMap, key: string, defaultValue: number): number {
    if (!map.has(key)) {
      return defaultValue;
    }

    return Number(map.get(key));
  }

  ngOnInit() {

    window.setInterval(() => {

      const changedSettings = {
        tail: fastEqual(this.settings.tail, this._defaultTail) ? undefined : this.settings.tail,
        count: fastEqual(this.settings.count, this._defaultCount) ? undefined : this.settings.count,
        speed: fastEqual(this.settings.speed, this._defaultSpeed) ? undefined : this.settings.speed,
        size: fastEqual(this.settings.size, this._defaultSize) ? undefined : this.settings.size,
        force: fastEqual(this.settings.force, this._defaultForce) ? undefined : this.settings.force,
        red: fastEqual(this.settings.red, this._defaultRed) ? undefined : this.settings.red,
        green: fastEqual(this.settings.green, this._defaultGreen) ? undefined : this.settings.green,
        blue: fastEqual(this.settings.blue, this._defaultBlue) ? undefined : this.settings.blue,
      };

      this.router.navigate(['.'], { relativeTo: this.route, queryParams: changedSettings }
      );
    }, 1000);

    this.document.addEventListener('mousedown', () => this.showSettings(), {capture: true});
    this.document.addEventListener('mousemove', () => this.showSettings(), {capture: true});
    this.document.addEventListener('touchstart', () => this.showSettings(), {capture: true});

    const params = this.route.snapshot.queryParamMap;

    this.settings.red = this.getColorOrDefault(params, 'red', this._defaultRed);
    this.settings.green = this.getColorOrDefault(params, 'green', this._defaultGreen);
    this.settings.blue = this.getColorOrDefault(params, 'blue', this._defaultBlue);

    this.settings.tail = this.getNumberOrDefault(params, 'tail', this._defaultTail);
    this.settings.count = this.getNumberOrDefault(params, 'count', this._defaultCount);
    this.settings.speed = this.getNumberOrDefault(params, 'speed', this._defaultSpeed);
    this.settings.size = this.getNumberOrDefault(params, 'size', this._defaultSize);
    this.settings.force = this.getNumberOrDefault(params, 'force', this._defaultForce);

    this.showSettings();
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

    this._settingsTimeout = setTimeout(() => this.settingsVisible = false, 3000);
  }

}
