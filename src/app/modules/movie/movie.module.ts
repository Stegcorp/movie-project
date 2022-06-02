import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieListCardComponent} from './components/movie-list-card/movie-list-card.component';
import {MovieService} from './services/movie.service';
import {HttpModule} from '../../http.module';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GenresComponent } from './components/genres/genres.component';
import {BottomComponent} from '../../components/bottom/bottom.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
    declarations:
        [
            MovieListComponent,
            MovieListCardComponent,
            MovieInfoComponent,
            GenresComponent,
            BottomComponent
        ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpModule,
    MatPaginatorModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    GenresComponent,
    MovieListComponent
  ],
    providers: [
        MovieService,
    ]
})
export class MovieModule {
}
