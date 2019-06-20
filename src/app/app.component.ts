import { Component, DoCheck, OnInit, AfterViewInit } from '@angular/core';
import { Settings } from './settings';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shadebobs';

  settings: Settings = new Settings();
  settingsVisible: boolean = false;

  public constructor(private router: Router, private route: ActivatedRoute) {

    this.route.queryParamMap.subscribe(params => {

      this.settings.tail = this.getValueOrDefault(params, 'tail', 40000);
      this.settings.count = this.getValueOrDefault(params, 'count', 7);
      this.settings.speed = this.getValueOrDefault(params, 'speed', 8);
      this.settings.size = this.getValueOrDefault(params, 'size', 27);
      this.settings.force = this.getValueOrDefault(params, 'force', 4);

      this.settings.palette = [[0], [0], [0]];

      // this.settings.redBegin = this.getValueOrDefault(params, 'redBegin', 255);
      // this.settings.redEnd = this.getValueOrDefault(params, 'redEnd', 0);
      // this.settings.redCycle = this.getValueOrDefault(params, 'redCycle', 200);

      // this.settings.greenBegin = this.getValueOrDefault(params, 'greenBegin', 255);
      // this.settings.greenEnd = this.getValueOrDefault(params, 'greenEnd', 0);
      // this.settings.greenCycle = this.getValueOrDefault(params, 'greenCycle', 210);

      // this.settings.blueBegin = this.getValueOrDefault(params, 'blueBegin', 255);
      // this.settings.blueEnd = this.getValueOrDefault(params, 'blueEnd', 0);
      // this.settings.blueCycle = this.getValueOrDefault(params, 'blueCycle', 220);
    });

    this.settings.onChanged.subscribe(newSettings => {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        tail: newSettings.tail,
        count: newSettings.count,
        speed: newSettings.speed,
        size: newSettings.size,
        force: newSettings.force
        // redBegin: newSettings.redBegin,
        // redEnd: newSettings.redEnd,
        // redCycle: newSettings.redCycle,
        // greenBegin: newSettings.greenBegin,
        // greenEnd: newSettings.greenEnd,
        // greenCycle: newSettings.greenCycle,
        // blueBegin: newSettings.blueBegin,
        // blueEnd: newSettings.blueEnd,
        // blueCycle: newSettings.blueCycle
      }});        
    });
  }

  private getValueOrDefault<T>(map: ParamMap, key: string, defaultValue: T): T {
    return map.has(key) ? <T>(map.get(key) as any) : defaultValue;
  }

  public toggleSettings() {
    this.settingsVisible = !this.settingsVisible;
  }
}
