import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../../modules/movie/services/movie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../modules/movie/services/data.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  form: FormGroup;
  mitka: boolean;

  constructor(private movieService: MovieService, private router: Router, private  dataService: DataService) {
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
    console.log(this.form);
    this.mitka = true;
    this.dataService.storage.next(this.mitka);
  }
}
