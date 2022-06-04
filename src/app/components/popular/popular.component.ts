import { Component, OnInit } from '@angular/core';
import {IObj} from '../../modules/movie/interfaces/obj.interface';
import {IMovie} from '../../modules/movie/interfaces/movie.interface';
import {MovieService} from '../../modules/movie/services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movieList: IObj;
  results: IMovie[];
  page: number;


  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page, with_genres}) => {
      this.movieService.getPopular(page, with_genres).subscribe(value => {
        this.movieList = value;
        this.results = this.movieList.results;
        this.page = this.movieList.page;
      });
    });
  }

}
