import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IGenre} from '../interfaces/genres.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  storage = new BehaviorSubject<any>(null);

  constructor() {
  }
}
