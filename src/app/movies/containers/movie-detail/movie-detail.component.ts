import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromMovies from '../../reducers';
import * as MovieActions from '../../actions/movie.actions';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnDestroy {
  movie$: Observable<Movie>;
  actionsSubscription: Subscription;


  constructor(store: Store<fromMovies.State>, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(map(params => new MovieActions.Select(Number(params.id))))
      .subscribe(store);
    this.movie$ = store.select(fromMovies.getSelectedMovie);
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

}




