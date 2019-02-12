import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromMovies from '../../reducers';
import * as MovieActions from '../../actions/movie.actions';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-search-movies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {
  public query$: Observable<string>;
  public movies$: Observable<Movie[]>;
  public loading$: Observable<boolean>;
  public error$: Observable<string>;

  constructor(private store: Store<fromMovies.State>) {
    this.query$ = store.pipe(
      select(fromMovies.getSearchQuery),
      take(1)
    );
    this.movies$ = store.pipe(select(fromMovies.getSearchResults));
    this.loading$ = store.pipe(select(fromMovies.getSearchLoading));
    this.error$ = store.pipe(select(fromMovies.getSearchError));
  }

  search(query: string) {
    this.store.dispatch(new MovieActions.Search(query));
  }
}
