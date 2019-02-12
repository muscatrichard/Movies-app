import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, empty, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import {
  MovieActionTypes, Search, SearchSuccess, SearchFail, LoadFail,
  LoadSuccess, FilterSuccess, FilterFail, Filter
} from '../actions/movie.actions';
import { MoviesApiService } from '../../shared/services/movies.api.service';
import { Movie } from '../models/movie';

@Injectable()
export class MovieEffects {

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(MovieActionTypes.Load),
    switchMap(() =>
      this.moviesApiService.get(
        {_sort:'rate',_order:'desc',_start:0,_end:5}
      ).pipe(
        map((movies: Movie[]) => new LoadSuccess(movies)),
        catchError(error => of(new LoadFail(error)))
      )
    )
  );

  @Effect()
  filter$: Observable<Action> = this.actions$.pipe(
    ofType<Filter>(MovieActionTypes.Filter),
    map(action => action.payload),
    switchMap((filter) => {
      return this.moviesApiService.get({genres_like: filter}).pipe(
        map((movies: Movie[]) => new FilterSuccess(movies)),
        catchError(error => of(new FilterFail(error)))
      ); }
    )
  );


  @Effect()
  search$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<Search>(MovieActionTypes.Search),
      debounceTime(debounce, scheduler),
      map(action => action.payload),
      switchMap(query => {
        if (query === '') {
          return empty();
        }

        const nextSearch$ = this.actions$.pipe(
          ofType(MovieActionTypes.Search),
          skip(1)
        );
        return this.moviesApiService.get({name_like: query}).pipe(
          takeUntil(nextSearch$),
          map((movies: Movie[]) => new SearchSuccess(movies)),
          catchError(err => of(new SearchFail(err)))
        );
      })
    );

  constructor(
    private actions$: Actions,
    private moviesApiService: MoviesApiService,
  ) {}
}









