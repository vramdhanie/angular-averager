import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ItemCountComponent } from './item-count/item-count.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ItemCountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
