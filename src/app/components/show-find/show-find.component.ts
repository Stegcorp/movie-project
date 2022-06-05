import {Component, Input, OnInit} from '@angular/core';
import {ISearch} from '../../interfaces/ISearch';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../modules/movie/services/movie.service';
import {IMovie} from '../../modules/movie/interfaces/movie.interface';

@Component({
  selector: 'app-show-find',
  templateUrl: './show-find.component.html',
  styleUrls: ['./show-find.component.css']
})
export class ShowFindComponent implements OnInit {
  @Input()
  show: IMovie[];

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({query}) => {
      this.movieService.getSearchNew(query).subscribe(({results}) => {
        this.show = results;
        console.log(this.show);
      });
    });
  }

}
