import {Component, Input, OnInit} from '@angular/core';
import {TimerService} from "../services/timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() time: Number;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
  }

}
