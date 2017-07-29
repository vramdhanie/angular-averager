import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-estimated-time',
  templateUrl: './estimated-time.component.html',
  styleUrls: ['./estimated-time.component.scss']
})
export class EstimatedTimeComponent implements OnInit {

  @Input() eta: Date;
  constructor() { }

  ngOnInit() {
  }

}
