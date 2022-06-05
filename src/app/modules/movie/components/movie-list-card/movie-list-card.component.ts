import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../interfaces/movie.interface';

import {IGenre} from '../../interfaces/genres.interface';
import {MovieService} from '../../services/movie.service';


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


  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.date = this.listCard.release_date.slice(0, 4);
    this.genre = this.listCard.genre_ids;
    // @ts-ignore
    this.movieService.getGenres().subscribe(({genres}) => this.genres = genres);
  }


}
