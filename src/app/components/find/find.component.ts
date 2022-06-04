import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MovieService} from '../../modules/movie/services/movie.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  form: FormGroup;
  valueFind: string;
  search: [];

  constructor(private movieService: MovieService, private router: Router,
              private route: ActivatedRoute) {
    this._createForm();
  }

  ngOnInit(): void {

  }

  _createForm(): void {
    this.form = new FormGroup({
      find: new FormControl(null)
    });
  }

  onEnter(): void {
    this.movieService.getSearch(this.form.value.find).subscribe(({results}) => {
      console.log(results);
      this.form.reset();
    });
  }
}
