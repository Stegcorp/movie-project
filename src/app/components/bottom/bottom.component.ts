import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
