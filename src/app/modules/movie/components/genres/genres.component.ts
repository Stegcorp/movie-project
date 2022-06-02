import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from '../../interfaces/genres.interface';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  @Input()
  genre: IGenre;
  constructor() { }

  ngOnInit(): void {
  }

}
