import { Component, DoCheck, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Settings } from './settings';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnChanges {
  title = 'shadebobs';

  settings: Settings = new Settings();
  settingsVisible: boolean = false;

  public constructor(private router: Router, private route: ActivatedRoute) {

    this.settings.redPoints = 
    [
        [0, 0],
      [30, 255],
      [50, 255],
      [75, 120],
      [100, 100],
    ];
  
    this.settings.greenPoints = 
    [
        [0, 0],
      [30, 255],
      [40, 255],
      [75, 120],
      [100, 100],
    ];
  
    this.settings.bluePoints =
    [
        [0, 80],
      [40, 80],
      [50, 255],
      [75, 120],
      [100, 255],
    ];
  
  
    this.route.queryParamMap.subscribe(params => {

      this.settings.tail = this.getValueOrDefault(params, 'tail', 40000);
      this.settings.count = this.getValueOrDefault(params, 'count', 7);
      this.settings.speed = this.getValueOrDefault(params, 'speed', 8);
      this.settings.size = this.getValueOrDefault(params, 'size', 10);
      this.settings.force = this.getValueOrDefault(params, 'force', 4);
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

  public ngOnChanges(changes: SimpleChanges): void {
  }

  private getValueOrDefault<T>(map: ParamMap, key: string, defaultValue: T): T {
    return map.has(key) ? <T>(map.get(key) as any) : defaultValue;
  }

  public toggleSettings() {
    this.settingsVisible = !this.settingsVisible;
  }


  public get settingsIconColor(): string {
    if (this.settingsVisible) {
      return "black";
    } else {
      let sum = this.settings.paletteR[0] + this.settings.paletteG[0] + this.settings.paletteB[0];
      return sum > 350 ? "black" : "white";
    }
  }
}
