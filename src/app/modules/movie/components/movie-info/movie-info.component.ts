import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MovieService} from '../../services/movie.service';
import {IMoviOne} from '../../interfaces/one movie/onemovie.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IForm} from '../../interfaces/form-interface';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  filmInfo: IMoviOne;
  poster = 'https://image.tmdb.org/t/p/w500/';
  form: FormGroup;
  useForm: IForm[];
  formGod: IForm;
  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedValue: number;
  isMouseover = true;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    this._createForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.movieService.getInfo(id).subscribe(value => {
        this.filmInfo = value;
        this.selectedValue = this.filmInfo.vote_average;
        this.useForm = [];
      });
    });
  }

  _createForm(): void {
    this.form = new FormGroup({
      find: new FormControl('Write a review', [Validators.minLength(2)]),
      people: new FormControl('name', [Validators.minLength(2)])
    });
  }

  comment(): void {
    this.formGod = this.form.getRawValue();
    this.useForm.push(this.formGod);
  }

  countStar(star: number): void {
    this.isMouseover = false;
    this.selectedValue = star;
  }

  addClass(star: number): void {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
  }

  removeClass(): void {
    if (this.isMouseover) {
      this.selectedValue = 0;
    }
  }
}
