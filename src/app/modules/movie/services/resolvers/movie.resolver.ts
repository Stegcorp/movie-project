import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, ActivatedRoute, Route, Router, Routes
} from '@angular/router';
import {Observable} from 'rxjs';

import {MovieService} from '../movie.service';
import {IObj} from '../../interfaces/obj.interface';
import {filter, map, switchMap, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<IObj> {

  // page: any;
  // genre: number;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {
    // this.activatedRoute.queryParams.subscribe(({with_genres}) => {
    //   this.genre = with_genres;
    //   console.log(this.genre);
    // });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IObj> | Promise<IObj> | IObj {
    // const page: string = route.paramMap.get('page');
    // console.log(this.router.navigateByUrl(`/movie?page=${page}`));
    // this.router.navigateByUrl(`/search-result?user=${searchTerm}`);
    // return this.activatedRoute.queryParams.pipe(
    //   tap(params => console.log(`Params: ${params}`)),
    //   // wait until params has user in it
    //   filter(params => !!params['page']),
    //   tap(params => console.log('after filter')),
    //   // extract the value of the user param
    //   map(params => params['page']),
    //   // switch to a new observable stream once we know the searchTerm
    //   switchMap(page => this.movieService.getAllObj(page)),
    // );
    return this.movieService.getAllObj();
  }


}



