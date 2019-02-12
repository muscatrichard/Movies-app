import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GenreType, KeyValueObject, Movie } from '../../models/movie';
import { Observable } from 'rxjs/index';
import * as fromMovies from '../../reducers';
import * as MovieActions from '../../actions/movie.actions';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public filter$: Observable<GenreType>;
  public movies$: Observable<Movie[]>;
  public options: KeyValueObject[];

  constructor(private store: Store<fromMovies.State>) {
    this.filter$ = store.pipe(select(fromMovies.getGenreFilter));
    this.movies$ = store.pipe(select(fromMovies.getFilterResults));
  }

  ngOnInit() {
    this.options = Object.keys(GenreType).map(key => ({key,value: GenreType[key]}));
  }

  filter(genre: GenreType) {
      this.store.dispatch(new MovieActions.Filter(genre));
  }

}
