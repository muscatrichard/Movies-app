import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';

const URL = 'http://localhost:3000/movies';


@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {

  constructor (private http: HttpClient) {}


  get(params?: any): Observable<any> {
    let options = {};
    if (params) {
      options = {params};
    }
    return this.http.get(URL, options);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${URL}/${id}`);
  }

}
