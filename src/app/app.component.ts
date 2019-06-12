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

  public constructor(private router: Router, private route: ActivatedRoute) {

    this.route.queryParamMap.subscribe(params => {

      this.settings.tail = this.getValueOrDefault(params, 'tail', 25000);
      this.settings.count = this.getValueOrDefault(params, 'count', 8);
      this.settings.speed = this.getValueOrDefault(params, 'speed', 4);
      this.settings.size = this.getValueOrDefault(params, 'size', 25);
      this.settings.force = this.getValueOrDefault(params, 'force', 2);
    });

    this.settings.onChanged.subscribe(newSettings => {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        tail: newSettings.tail,
        count: newSettings.count,
        speed: newSettings.speed,
        size: newSettings.size,
        force: newSettings.force
      }});        
    });
  }

  private getValueOrDefault<T>(map: ParamMap, key: string, defaultValue: T): T {
    return map.has(key) ? <T>(map.get(key) as any) : defaultValue;
  }
}
