import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-child',
  templateUrl: './tab-child.component.html',
  styleUrls: ['./tab-child.component.css']
})
export class TabChildComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}