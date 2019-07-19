import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { GhostSliderComponent } from './ghost-slider/ghost-slider.component';
import { GhostCurveComponent } from './ghost-curve/ghost-curve.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    SettingsComponent,
    GhostSliderComponent,
    GhostCurveComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
