import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMovie} from '../interfaces/movie.interface';
import {urls} from '../../../constants/urls';
import {IObj} from '../interfaces/obj.interface';
import {IGenre} from '../interfaces/genres.interface';
import {IMoviOne} from '../interfaces/one movie/onemovie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private httpClient: HttpClient) {
  }

  getInfo(id: number): Observable<IMoviOne> {
    return this.httpClient.get<IMoviOne>(`${urls.movie}/${id}`);
  }

  getAllObj(page: number = 1, gen?: number): Observable<IObj> {
    return this.httpClient.get<IObj>(`${urls.movies}?page=${page}&with_genres=${gen}`);
  }

  getGenres(): Observable<IGenre> {
    return this.httpClient.get<IGenre>(urls.genres );
  }

  getPopular(page: number = 1, gen?: number): Observable<IObj> {
    return this.httpClient.get<IObj>(`${urls.popular}?page=${page}&with_genres=${gen}`);
  }
  getNowPlaying(page: number = 1, gen?: number): Observable<IObj> {
    return this.httpClient.get<IObj>(`${urls.now_playing}?page=${page}&with_genres=${gen}`);
  }
  getLatest(page: number = 1, gen?: number): Observable<IObj> {
    return this.httpClient.get<IObj>(`${urls.latest}?page=${page}&with_genres=${gen}`);
  }

}
