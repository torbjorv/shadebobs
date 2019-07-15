import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CurveEditorComponent } from './curve-editor/curve-editor.component';
import { GhostSliderComponent } from './ghost-slider/ghost-slider.component';
import { SettingsComponent } from './settings/settings.component';
import { GhostSlider2Component } from './ghost-slider2/ghost-slider2.component';
import { GhostCurveComponent } from './ghost-curve/ghost-curve.component';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    CurveEditorComponent,
    GhostSliderComponent,
    SettingsComponent,
    GhostSlider2Component,
    GhostCurveComponent,
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
