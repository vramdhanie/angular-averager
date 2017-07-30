import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-laps',
  templateUrl: './laps.component.html',
  styleUrls: ['./laps.component.scss']
})
export class LapsComponent implements OnInit {

  @Input() laps;
  constructor() { }

  ngOnInit() {
  }

}
