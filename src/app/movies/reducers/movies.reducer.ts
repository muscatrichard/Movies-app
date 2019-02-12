import {MovieActionTypes, MovieActions} from '../actions/movie.actions';
import { Movie } from '../models/movie';

export interface State {
  movies: Movie[];
  selectedMovieId: number;
  loading: boolean;
  error: string;
}

const initialState: State = {
  movies: [],
  selectedMovieId: null,
  loading: false,
  error: ''
};

export function reducer(state = initialState, action: MovieActions): State {
  switch (action.type) {
    case MovieActionTypes.Load: {
      return {
        ...state,
        loading: true
      };
    }

    case MovieActionTypes.LoadSuccess: {
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: ''
      };
    }

    case MovieActionTypes.SearchSuccess:
    case MovieActionTypes.FilterSuccess: {
      const movies = action.payload;
      const currentMoviesIds = state.movies.map(movie => movie.id);
      const newMovies = movies.filter(movie => !currentMoviesIds.includes(movie.id));
      return {
        movies: [...state.movies, ...newMovies],
        selectedMovieId: state.selectedMovieId,
        loading: false,
        error: ''
      };
    }

    case MovieActionTypes.LoadFail: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case MovieActionTypes.AddMovie: {
      const movie = action.payload;

      return {
        ...state,
        movies: [...state.movies, movie],
        selectedMovieId: movie.id
      };
    }

    case MovieActionTypes.Select: {
      return {
        ...state,
        selectedMovieId: action.payload
      };
    }
    default: {
      return state;
    }
  }

}

export const getSelectedId = (state: State) => state.selectedMovieId;
export const getLoaded = (state: State) => !state.loading;
export const getLoading = (state: State) => state.loading;
export const getMovies = (state: State) => state.movies;
export const getMoviesIds = (state: State) => state.movies.map(movie => movie.id);
