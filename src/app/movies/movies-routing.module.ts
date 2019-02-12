import { SearchMoviesComponent } from './containers/search-movies/search-movies.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MovieDetailComponent } from './containers/movie-detail/movie-detail.component';
import { MovieExistsGuard } from './guards/movie-exists.guard';
import { MoviesComponent } from './containers/movies/movies.component';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailComponent, canActivate: [MovieExistsGuard]},
  {path: 'search', component: SearchMoviesComponent},
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
