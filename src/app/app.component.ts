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

  @ViewChild('renderer', { static: false })
  public renderer: RendererComponent;

  public constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) public document: HTMLDocument,
    public fullscreen: FullscreenService) {

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

      this.settings.tail = this.getNumberOrDefault(params, 'tail', this.settings.tail);
      this.settings.count = this.getNumberOrDefault(params, 'count', this.settings.count);
      this.settings.speed = this.getNumberOrDefault(params, 'speed', this.settings.speed);
      this.settings.size = this.getNumberOrDefault(params, 'size', this.settings.size);
      this.settings.force = this.getNumberOrDefault(params, 'force', this.settings.force);
    });

    window.setInterval(() => {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: this.settings }
      );
    }, 1000);

    this.document.addEventListener('mousedown', () => this.showSettings(), {capture: true});
    this.document.addEventListener('mousemove', () => this.showSettings(), {capture: true});
    this.document.addEventListener('touchstart', () => this.showSettings(), {capture: true});
  }

  private getNumberOrDefault(map: ParamMap, key: string, defaultValue: number): number {
    if (!map.has(key)) {
      return defaultValue;
    }

    return Number(map.get(key));
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
