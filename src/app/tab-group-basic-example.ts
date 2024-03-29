import {Component, ViewChild} from '@angular/core';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  styleUrls: ['tab-group-basic-example.css'],
})
export class TabGroupBasicExample {
  @ViewChild('mytab', { static: true}) tab: any;

  next() {
    this.tab.selectedIndex = this.tab.selectedIndex + 1;
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */