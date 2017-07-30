import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ItemCountComponent } from './item-count/item-count.component';
import { EstimatedTimeComponent } from './estimated-time/estimated-time.component';
import { ControlsComponent } from './controls/controls.component';
import { LapComponent } from './lap/lap.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ItemCountComponent,
    EstimatedTimeComponent,
    ControlsComponent,
    LapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
