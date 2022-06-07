import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {IMovie} from '../../interfaces/movie.interface';

import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {


  constructor(private movieService: MovieService, private viewportScroller: ViewportScroller) {
  }

  top: IMovie[];
  poster = 'https://image.tmdb.org/t/p/w500/';

  ngOnInit(): void {
    this.movieService.topRaiting().subscribe(({results}) => this.top = results.filter((_, i) => i < 10));
  }


  toTop(): void {
    this.viewportScroller.scrollToPosition([0, 600]);
  }

}
