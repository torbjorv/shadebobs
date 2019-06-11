import { Component, OnInit, Input } from '@angular/core';
import { Settings } from '../settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  @Input('settings')
  settings: Settings;

  constructor() { }

  ngOnInit() {
  }

} 
