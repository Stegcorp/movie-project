import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../../modules/movie/services/movie.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  form: FormGroup;


  constructor(private movieService: MovieService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {

  }

  _createForm(): void {
    this.form = new FormGroup({
      find: new FormControl(null, [Validators.minLength(1)])
    });
  }

  onEnter(): void {
    this.router.navigate(['/search/movie'], {queryParams: {query: this.form.value.find}});
    this.form.reset();
  }

}
