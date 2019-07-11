import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CardinalCurve } from '../cardinal-curve';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
  animations: [
    trigger('focusCurve', [
      state('Starting', style({
        opacity: 1,
      })),
      state('None', style({
        opacity: 0.0,
      })),
      state('Dragging', style({
        opacity: 0.5,
      })),
      transition('Starting => Dragging', [
        animate('0.5s')
      ]),
      transition('* => None', [
        animate('0.2s')
      ]),
      transition('* => Starting', [
        animate('0.1s')
      ])
    ])
  ]
})
export class SettingsComponent implements OnInit {

  public gradientR: {};
  public gradientG: {};
  public gradientB: {};
  public gradient: {};

  @Input()
  public set tail(value: number) {
    this._tail = value;
    this.tailChange.next(this.tail);
  }
  public get tail(): number { return this._tail; }
  @Output() tailChange: EventEmitter<number> = new EventEmitter();
  private _tail: number;

  @Input()
  public set count(value: number) {
    this._count = value;
    this.countChange.next(this.count);
  }
  public get count(): number { return this._count; }
  @Output() countChange: EventEmitter<number> = new EventEmitter();
  private _count: number;

  @Input()
  public set speed(value: number) {
    this._speed = value;
    this.speedChange.next(this.speed);
  }
  public get speed(): number { return this._speed; }
  @Output() speedChange: EventEmitter<number> = new EventEmitter();
  private _speed: number;

  @Input()
  public set size(value: number) {
    this._size = value;
    this.sizeChange.next(this.size);
  }
  public get size(): number { return this._size; }
  @Output() sizeChange: EventEmitter<number> = new EventEmitter();
  private _size: number;

  @Input()
  public set force(value: number) {
    this._force = value;
    this.forceChange.next(this.force);
  }
  public get force(): number { return this._force; }
  @Output() forceChange: EventEmitter<number> = new EventEmitter();
  private _force: number;


  private _red: [number, number][] = [];
  @Input()
  public set red(value: [number, number][]) {
    this._red = value;
    this._redChange.next(value);
  }

  public get red(): [number, number][] {
    return this._red;
  }

  private _redChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get redChange(): Observable<[number, number][]> {
    return this._redChange;
  }

  private _green: [number, number][] = [];
  @Input()
  public set green(value: [number, number][]) {
    this._green = value;
    this._greenChange.next(value);
  }
  public get green(): [number, number][] {
    return this._green;
  }

  private _greenChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get greenChange(): Observable<[number, number][]> {
    return this._greenChange;
  }

  private _blue: [number, number][] = [];
  @Input()
  public set blue(value: [number, number][]) {
    this._blue = value;
    this._blueChange.next(value);
  }
  public get blue(): [number, number][] {
    return this._blue;
  }

  private _blueChange: Subject<[number, number][]> = new Subject();
  @Output()
  public get blueChange(): Observable<[number, number][]> {
    return this._blueChange;
  }

  constructor() {
    this.redChange.subscribe(() => this.updatePalettes());
    this.greenChange.subscribe(() => this.updatePalettes());
    this.blueChange.subscribe(() => this.updatePalettes());
  }

  ngOnInit() {
  }

  public get toolbarColor(): string {
    const firstR = this.red[0][1];
    const firstG = this.green[0][1];
    const firstB = this.blue[0][1];
    const sum = firstR + firstG + firstB;
    return sum > 350 ? 'black' : 'white';
  }

  public get toolbarBackground(): string {
    const firstR = this.red[0][1];
    const firstG = this.green[0][1];
    const firstB = this.blue[0][1];
    const sum = firstR + firstG + firstB;
    return sum > 350 ? 'white' : 'black';
  }

  private updatePalettes() {
    const steps = 101;
    const paletteR = CardinalCurve.build(this.red, 0.5, steps);
    const paletteG = CardinalCurve.build(this.green, 0.5, steps);
    const paletteB = CardinalCurve.build(this.blue, 0.5, steps);

    this.gradientR = this.buildGradient(paletteR, Array(steps).fill(0), Array(steps).fill(0), Array(steps).fill(1));
    this.gradientG = this.buildGradient(Array(steps).fill(0), paletteG, Array(steps).fill(0), Array(steps).fill(1));
    this.gradientB = this.buildGradient(Array(steps).fill(0), Array(steps).fill(0), paletteB, Array(steps).fill(1));
    this.gradient = this.buildGradient(paletteR, paletteG, paletteB, Array(steps).fill(1));
  }

  public buildGradient(r: number[], g: number[], b: number[], a: number[]) {

    let value = 'linear-gradient(to right';
    for (let i = 0; i < r.length; i++) {
      value += `, rgba(${r[i]}, ${g[i]}, ${b[i]}, ${a[i]}) ${i}%`;
    }
    value += ')';
    return {
      background: value
    };
  }


}
