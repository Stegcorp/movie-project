import {environment} from '../../environments/environment';
import {query} from '@angular/animations';


const {API} = environment;

export const urls = {
  movies: `${API}/discover/movie`,
  movie: `${API}/movie`,
  genres: `${API}/genre/movie/list`,
  now_playing: `${API}/movie/nov_playing`,
  popular: `${API}/movie/popular`,
  latest: `${API}/movie/latest`,
  topTen: `${API}/movie/top_rated`,
  search: `${API}/search/keyword`
};
