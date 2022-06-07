import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieListCardComponent} from './components/movie-list-card/movie-list-card.component';
import {MovieService} from './services/movie.service';
import {HttpModule} from '../../http.module';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {GenresComponent} from './components/genres/genres.component';
import {BottomComponent} from '../../components/bottom/bottom.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {TopTenComponent} from './components/top-ten/top-ten.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MovieSearchComponent} from './components/movie-search/movie-search.component';


@NgModule({
  declarations:
    [
      MovieListComponent,
      MovieListCardComponent,
      MovieInfoComponent,
      GenresComponent,
      BottomComponent,
      TopTenComponent,
      MovieSearchComponent
    ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpModule,
    MatPaginatorModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    GenresComponent,
    MovieListComponent,
    BottomComponent,
    MovieListCardComponent,
    TopTenComponent
  ],
  providers: [
    MovieService,
  ]
})
export class MovieModule {
}
