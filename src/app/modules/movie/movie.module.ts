import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieListCardComponent} from './components/movie-list-card/movie-list-card.component';
import {MovieService} from './services/movie.service';
import {HttpModule} from '../../http.module';




@NgModule({
  declarations:
    [
      MovieListComponent,
      MovieListCardComponent
    ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpModule
  ],
  providers: [
    MovieService,
  ]
})
export class MovieModule {
}
