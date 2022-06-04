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


  toTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
