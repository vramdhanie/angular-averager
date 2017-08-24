import { Injectable } from '@angular/core';
import {clearInterval} from "timers";

@Injectable()
export class TimerService {

  timerId: any;
  TICK = 30;
  time = 0;

  constructor() { }

  start() {
    this.timerId = setInterval(() => this.tick(), this.TICK );
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.time = this.time + this.TICK;
  }

}
