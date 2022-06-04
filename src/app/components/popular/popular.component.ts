import {Component, OnInit} from '@angular/core';
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


  results: IMovie[];
  poster = 'https://image.tmdb.org/t/p/w500/';

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe(({results}) =>
      this.results = results.filter((_, i) => i < 6));
  }


}
