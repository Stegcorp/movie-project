import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../interfaces/movie.interface';

import {IGenre} from '../../interfaces/genres.interface';
import {MovieService} from '../../services/movie.service';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

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


  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.date = this.listCard.release_date.slice(0, 4);
    this.genre = this.listCard.genre_ids;
    this.activatedRoute.queryParams.subscribe(({query}) => {
      if (query){
      this.movieService.getSearchNew(query).subscribe(({results}) => this.genres = results);
      }else {
        // @ts-ignore
        this.movieService.getGenres().subscribe(({genres}) => this.genres = genres);
      }
    });
  }
}
