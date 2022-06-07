import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieListCardComponent} from './components/movie-list-card/movie-list-card.component';
import {MovieResolver} from './services/resolvers/movie.resolver';

const routes: Routes = [
  {path: '', component: MovieListComponent,
    resolve: {dataMovie: MovieResolver},
    children: [
      // {path: ':id', component: MovieListCardComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
