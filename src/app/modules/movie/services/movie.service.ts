import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMovie} from '../interfaces/movie.interface';
import {urls} from '../../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.movies);
  }
  getAllObj(): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movies}`);
  }
}
