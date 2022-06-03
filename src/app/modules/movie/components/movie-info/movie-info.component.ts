import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMovie} from '../../interfaces/movie.interface';
import {MovieService} from '../../services/movie.service';
import {IMoviOne} from '../../interfaces/one movie/onemovie.interface';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  filmInfo: IMoviOne;
  poster = 'https://image.tmdb.org/t/p/w500/';

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
       this.movieService.getInfo(id).subscribe(value => this.filmInfo = value);
    });
  }

}
