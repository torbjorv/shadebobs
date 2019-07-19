import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
      transition('false => true', [
        animate('1s')
      ]),
    ])
  ]
})
export class SplashScreenComponent implements OnInit, AfterViewInit {

  public fade = false;
  public done = false;

  constructor(private _changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.fade = true;
    this._changeDetector.detectChanges();
  }
}
