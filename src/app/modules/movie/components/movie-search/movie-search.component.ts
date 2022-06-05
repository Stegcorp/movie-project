import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {IMovie} from '../../interfaces/movie.interface';
import {IObj} from '../../interfaces/obj.interface';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  search: IMovie[];
  poster = 'https://image.tmdb.org/t/p/w500/';
  date: string;
  movieList: IObj;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({query, page}) => {
      this.movieService.getSearchNew(query, page).subscribe(value => {
        this.search = value.results;
        this.movieList = value;
      });
    });
  }

  pageMinus(): void {
    if (this.movieList.page > 1) {
      this.router.navigate(['/search/movie/'], {queryParams: {page: this.movieList.page - 1}, queryParamsHandling: 'merge'});
    }
  }

}
