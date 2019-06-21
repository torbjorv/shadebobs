import { Component, OnInit, Input } from '@angular/core';
import { Settings } from '../settings';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent {

  @Input('settings')
  settings: Settings;

  constructor() { }
} 
  