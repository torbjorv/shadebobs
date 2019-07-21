import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  public done = false;

  constructor(private _changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.fade = true;
    this._changeDetector.detectChanges();
  }
}
