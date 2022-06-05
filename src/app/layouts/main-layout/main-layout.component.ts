import {Component, OnInit} from '@angular/core';
import {IGenre} from '../../modules/movie/interfaces/genres.interface';

import {MovieService} from '../../modules/movie/services/movie.service';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  genres: IGenre[];

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    // @ts-ignore
    this.movieService.getGenres().subscribe(({genres}) => this.genres = genres);
  }


}
