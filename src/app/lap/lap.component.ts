import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lap',
  templateUrl: './lap.component.html',
  styleUrls: ['./lap.component.scss']
})
export class LapComponent implements OnInit {

  @Input() number: number;
  @Input() time: Date;
  @Input() duration: number;
  constructor() { }

  ngOnInit() {
  }

}
