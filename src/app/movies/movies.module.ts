import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './containers/movies/movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { UIModule } from '../ui/ui.module';
import { SearchMoviesComponent } from './containers/search-movies/search-movies.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './effects/movie.effects';
import { HomeComponent } from './containers/home/home.component';
import { MovieDetailComponent } from './containers/movie-detail/movie-detail.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieListComponent,
    SearchMoviesComponent,
    HomeComponent,
    MovieDetailComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    UIModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MovieEffects])
  ]
})

export class MoviesModule {
}
