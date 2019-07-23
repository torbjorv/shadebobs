import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.sass'],
  animations: [
    trigger('fadeOut', [
      state('void, false', style({
        opacity : 1
      })),
      state('true', style({
        opacity: 0,
      })),
      transition('* => true', [
        animate('1s')
      ]),
    ])
  ]
})
export class SplashScreenComponent implements AfterViewInit {

  public fade = false;

  @ViewChild('container', {static: false}) private _container: ElementRef<HTMLElement>;

  constructor(
    private _changeDetector: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: HTMLDocument) { }

  ngAfterViewInit() {
    this.fade = true;
    this._changeDetector.detectChanges();

    // Move the splashscreen element from index.html to here so we can apply the fade
    const splashScreen: HTMLElement = this._document.getElementById('splashscreen');
    splashScreen.parentElement.removeChild(splashScreen);
    this._container.nativeElement.appendChild(splashScreen);
  }
}
