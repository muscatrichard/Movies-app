import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromMovies from '../../reducers';
import { Observable } from 'rxjs/index';
import { Movie } from '../../models/movie';
import * as MovieActions from '../../actions/movie.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public movies$: Observable<Movie[]>;

  constructor(private store: Store<fromMovies.State>) {
    this.store.dispatch(new MovieActions.Load(null));
    this.movies$ = store.pipe(select(fromMovies.getMovies));
  }
}
