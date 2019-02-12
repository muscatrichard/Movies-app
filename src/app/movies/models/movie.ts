export interface Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: GenreType[];
  rate: string;
  length: string;
  img: string;
}

export enum GenreType {
  All = '',
  Action = 'Action',
  Adventure = 'Adventure',
  Biography = 'Biography',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Drama = 'Drama',
  History = 'History',
  Mystery = 'Mystery',
  Scifi = 'Scifi',
  Sport = 'Sport',
  Thriller = 'Thriller'
}

export interface KeyValueObject {
  key: string;
  value: string;
}

