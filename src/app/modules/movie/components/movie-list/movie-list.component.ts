import {Component, OnInit} from '@angular/core';

import {IMovie} from '../../interfaces/movie.interface';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {IObj} from '../../interfaces/obj.interface';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: IObj;
  results: IMovie[];
  page: number;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page, with_genres}) => {
      this.movieService.getAllObj(page, with_genres).subscribe(value => {
        this.movieList = value;
        this.results = this.movieList.results;
        this.page = this.movieList.page;
      });
    });
  }


}
