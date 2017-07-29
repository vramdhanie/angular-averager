import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent implements OnInit {

  count: Number = 0;
  constructor() { }

  ngOnInit() {
  }

}
