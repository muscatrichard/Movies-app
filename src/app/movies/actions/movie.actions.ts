import { Action } from '@ngrx/store';
import { GenreType, Movie } from '../models/movie';

export enum MovieActionTypes {
  Load = '[Movie] Load',
  LoadSuccess = '[Movie] Load Success',
  LoadFail = '[Movie] Load Fail',
  Search = '[Movie] Search',
  SearchSuccess = '[Movie] Search Success',
  SearchFail = '[Movie] Search Fail',
  Filter = '[Movie] Filter',
  FilterSuccess = '[Movie] FilterSuccess',
  FilterFail = '[Movie] FilterFail',
  AddMovie= '[Movie] Add Movie',
  Select = '[Movie] Select',
}

export class Load implements Action {
  readonly type = MovieActionTypes.Load;

  constructor(public payload: any = null) {}
}

export class LoadSuccess implements Action {
  readonly type = MovieActionTypes.LoadSuccess;

  constructor(public payload: Movie[]) {}
}

export class LoadFail implements Action {
  readonly type = MovieActionTypes.LoadFail;

  constructor(public payload: string) {}
}
export class Search implements Action {
  readonly type = MovieActionTypes.Search;

  constructor(public payload: string) {}
}

export class SearchSuccess implements Action {
  readonly type = MovieActionTypes.SearchSuccess;

  constructor(public payload: Movie[]) {}
}

export class SearchFail implements Action {
  readonly type = MovieActionTypes.SearchFail;

  constructor(public payload: string) {}
}

export class Filter implements Action {
  readonly type = MovieActionTypes.Filter;

  constructor(public payload: GenreType = GenreType.All) {}
}

export class FilterSuccess implements Action {
  readonly type = MovieActionTypes.FilterSuccess;

  constructor(public payload: Movie[]) {}
}

export class FilterFail implements Action {
  readonly type = MovieActionTypes.FilterFail;

  constructor(public payload: string) {}
}

export class AddMovie implements Action {
  readonly type = MovieActionTypes.AddMovie;

  constructor(public  payload: Movie) {}
}
export class Select implements Action {
  readonly type = MovieActionTypes.Select;

  constructor(public payload: number) {}
}


export type MovieActions =
  | Load
  | LoadSuccess
  | LoadFail
  | Search
  | SearchSuccess
  | SearchFail
  | Filter
  | FilterSuccess
  | FilterFail
  | AddMovie
  | Select;
