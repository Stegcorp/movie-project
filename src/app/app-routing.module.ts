import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {MovieInfoComponent} from './modules/movie/components/movie-info/movie-info.component';
import {ShowFindComponent} from './components/show-find/show-find.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movie', pathMatch: 'full'},
      {path: 'movie', loadChildren: () => import('./modules/movie/movie.module').then(value => value.MovieModule)},
      {path: 'movie/:id', component: MovieInfoComponent},
      {path: 'movie/search/keyword', component: ShowFindComponent}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
