import {Component, Input, OnInit} from '@angular/core';
import {ISearch} from '../../interfaces/ISearch';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../modules/movie/services/movie.service';

@Component({
  selector: 'app-show-find',
  templateUrl: './show-find.component.html',
  styleUrls: ['./show-find.component.css']
})
export class ShowFindComponent implements OnInit {
  @Input()
  show: ISearch[];

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({query}) => {
      this.movieService.getSearch(query).subscribe(({results}) => {
        this.show = results;
      });
    });
  }

}
