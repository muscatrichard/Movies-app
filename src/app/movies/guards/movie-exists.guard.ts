
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';

import * as fromMovies from '../reducers';
import * as MovieActions from '../actions/movie.actions';
import { MoviesApiService } from '../../shared/services/movies.api.service';


@Injectable({
  providedIn: 'root',
})

export class MovieExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromMovies.State>,
    private moviesApiService: MoviesApiService,
    private router: Router
  ) {}


  waitForMoviesToLoad(): Observable<boolean> {
    return this.store.pipe(
      select(fromMovies.getLoaded),
      filter(loaded => loaded),
      take(1)
    );
  }

  hasMovieInStore(id: number): Observable<boolean> {
    return this.store.pipe(
      select(fromMovies.getMoviesIds),
      map(movies => movies.includes(id)),
      take(1)
    );
  }

  hasMovieInApi(id: number): Observable<boolean> {
    return this.moviesApiService.getById(id).pipe(
      map(MovieEntity => new MovieActions.AddMovie(MovieEntity)),
      tap((action: MovieActions.AddMovie) => this.store.dispatch(action)),
      map(Movie => !!Movie),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }

  hasMovie(id: number): Observable<boolean> {
    return this.hasMovieInStore(id).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }
        return this.hasMovieInApi(id);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.waitForMoviesToLoad().pipe(
      switchMap(() => this.hasMovie(Number(route.params['id'])))
    );
  }
}
