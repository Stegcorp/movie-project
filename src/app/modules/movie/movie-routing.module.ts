import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieListCardComponent} from './components/movie-list-card/movie-list-card.component';

const routes: Routes = [
  {path: '', component: MovieListComponent, children: [
      {path: ':id', component: MovieListCardComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
