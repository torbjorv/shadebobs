import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';
import { SettingsComponent } from './settings/settings.component';
import {MatSliderModule} from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
