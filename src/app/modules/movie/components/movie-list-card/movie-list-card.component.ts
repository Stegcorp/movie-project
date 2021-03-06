import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../interfaces/movie.interface';

import {IGenre} from '../../interfaces/genres.interface';
import {MovieService} from '../../services/movie.service';
import {ViewportScroller} from '@angular/common';


@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent implements OnInit {

  @Input()
  listCard: IMovie;
  poster = 'https://image.tmdb.org/t/p/w500/';
  date: string;
  genres: IGenre[];
  genre: [];
  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedValue: number;
  isMouseover = true;

  constructor(private movieService: MovieService, private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.date = this.listCard.release_date.slice(0, 4);
    this.genre = this.listCard.genre_ids;
    this.selectedValue = this.listCard.vote_average;
    // @ts-ignore
    this.movieService.getGenres().subscribe(({genres}) => this.genres = genres);
  }
  toTop(): void {
    this.viewportScroller.scrollToPosition([0, 600]);
  }
}
