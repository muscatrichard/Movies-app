import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromMovies from './movies.reducer';
import * as fromSearch from './search.reducer';
import * as fromFilter from './filter.reducer';
import * as fromRoot from '../../reducers';

export interface AppState {
  movies: fromMovies.State;
  search: fromSearch.State;
  filter: fromFilter.State;
}

export interface State extends fromRoot.State {
  movies: AppState;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: fromMovies.reducer,
  search: fromSearch.reducer,
  filter: fromFilter.reducer,
};

export const getMoviesState = createFeatureSelector<State, AppState>('movies');


export const getMovieEntitiesState = createSelector(
  getMoviesState,
  state => state.movies
);

export const getSelectedMovieId = createSelector(
  getMovieEntitiesState,
  fromMovies.getSelectedId
);



export const getSearchState = createSelector(
  getMoviesState,
  (state: AppState) => state.search
);

export const getSearchMovieIds = createSelector(
  getSearchState,
  fromSearch.getIds
);
export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);
export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

export const getFilterState = createSelector(
  getMoviesState,
  (state: AppState) => state.filter
);

export const getFilterMovieIds = createSelector(
  getFilterState,
  fromFilter.getIds
);
export const getGenreFilter = createSelector(
  getFilterState,
  fromFilter.getFilter
);
export const getFilterLoading = createSelector(
  getFilterState,
  fromFilter.getLoading
);
export const getFilterError = createSelector(
  getFilterState,
  fromFilter.getError
);

export const getSearchResults = createSelector(
  getMovieEntitiesState,
  getSearchMovieIds,
  (moviesState, searchIds) => {
    const movies = moviesState.movies;
    return searchIds.map(id => movies.find(movie => (movie.id === id)));
  }
);

export const getFilterResults = createSelector(
  getMovieEntitiesState,
  getFilterMovieIds,
  (moviesState, filterIds) => {
    const movies = moviesState.movies;
    return filterIds.map(id => movies.find(movie => (movie.id === id)));
  }
);


export const getSelectedMovie = createSelector(
  getMovieEntitiesState,
  getSelectedMovieId,
  (moviesState, id) => {
    const movies = moviesState.movies;
    return movies.find(movie => (movie.id === id));
  }
);

export const getMovies = createSelector(
  getMovieEntitiesState,
  fromMovies.getMovies
);

export const getLoading = createSelector(
  getMovieEntitiesState,
  fromMovies.getLoading
);

export const getLoaded = createSelector(
  getMovieEntitiesState,
  fromMovies.getLoaded
);

export const getMoviesIds = createSelector(
  getMovieEntitiesState,
  fromMovies.getMoviesIds
);




