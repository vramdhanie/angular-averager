import {Component, Input, OnInit} from '@angular/core';
import Lap from '../models/Lap';

@Component({
  selector: 'app-laps',
  templateUrl: './laps.component.html',
  styleUrls: ['./laps.component.scss']
})
export class LapsComponent implements OnInit {

  @Input() laps: Lap;
  constructor() { }

  ngOnInit() {
  }

}
