import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ItemCountComponent } from './item-count/item-count.component';
import { EstimatedTimeComponent } from './estimated-time/estimated-time.component';
import { ControlsComponent } from './controls/controls.component';
import { LapComponent } from './lap/lap.component';
import { LapsComponent } from './laps/laps.component';
import {TimerService} from "./services/timer.service";

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ItemCountComponent,
    EstimatedTimeComponent,
    ControlsComponent,
    LapComponent,
    LapsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
