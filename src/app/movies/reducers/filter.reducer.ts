import {MovieActionTypes, MovieActions} from '../actions/movie.actions';
import { GenreType } from '../models/movie';

export interface State {
  ids: number[];
  loading: boolean;
  error: string;
  filter: GenreType;
}

const initialState: State = {
  ids: [],
  loading: false,
  error: '',
  filter: GenreType.All,
};

export function reducer(state = initialState, action: MovieActions): State {
  switch (action.type) {
    case MovieActionTypes.Filter: {
      const filter = action.payload;
      return {
        ...state,
        loading: true,
        error: '',
        filter,
      };
    }

    case MovieActionTypes.FilterSuccess: {
      return {
        ids: action.payload.map(movie => movie.id),
        loading: false,
        error: '',
        filter: state.filter,
      };
    }

    case MovieActionTypes.FilterFail: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getFilter = (state: State) => state.filter;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
