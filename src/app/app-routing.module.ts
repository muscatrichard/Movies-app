import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/containers/movies/movies.component';
import { SearchMoviesComponent } from './movies/containers/search-movies/search-movies.component';
import { HomeComponent } from './movies/containers/home/home.component';
import { MovieDetailComponent } from './movies/containers/movie-detail/movie-detail.component';
import { MovieExistsGuard } from './movies/guards/movie-exists.guard';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [
  // { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: '',
    loadChildren: './movies/movies.module#MoviesModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
