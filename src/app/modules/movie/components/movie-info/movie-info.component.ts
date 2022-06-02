import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMovie} from '../../interfaces/movie.interface';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  filmInfo: IMovie;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
     if (id) {
       const {state: {data}} = history;
       this.filmInfo = data;
      }else {
       this.movieService.getInfo(id).subscribe(value => this.filmInfo = value);
     }
    });
  }

}
