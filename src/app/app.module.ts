import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ItemCountComponent } from './item-count/item-count.component';
import { EstimatedTimeComponent } from './estimated-time/estimated-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ItemCountComponent,
    EstimatedTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
