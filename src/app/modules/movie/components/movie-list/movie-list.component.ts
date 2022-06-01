import {Component, OnInit} from '@angular/core';

import {IMovie} from '../../interfaces/movie.interface';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: IMovie;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.movieService.getAllObj().subscribe(value => this.movieList = value);
  }


}
