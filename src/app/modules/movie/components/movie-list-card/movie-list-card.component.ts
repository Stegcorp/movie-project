import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.css']
})
export class MovieListCardComponent implements OnInit {
  @Input()
  listCard: IMovie;


  constructor() {
  }

  ngOnInit(): void {
  }

}
