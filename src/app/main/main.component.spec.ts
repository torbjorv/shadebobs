import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MainComponent } from './main.component';
import { SettingsComponent } from '../settings/settings.component';
import { RendererComponent } from '../renderer/renderer.component';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';
import { GhostSliderComponent } from '../ghost-slider/ghost-slider.component';
import { GhostCurveComponent } from '../ghost-curve/ghost-curve.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{path: '', component: MainComponent}]
        ),
        NoopAnimationsModule
      ],
      declarations: [
        MainComponent,
        SettingsComponent,
        RendererComponent,
        SplashScreenComponent,
        GhostSliderComponent,
        GhostCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
