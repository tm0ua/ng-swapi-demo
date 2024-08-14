import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  public getPeople() {
    const url = `${this.baseUrl}/people/`;
    return this.http.get(url).pipe(
      map((resp: any) => resp.results),
      catchError((err: any) => {
        console.log('caught people error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }

  public getStarships() {
    const url = `${this.baseUrl}/starships/`;
    return this.http.get(url).pipe(
      map((resp: any) => resp.results),
      catchError((err: any) => {
        console.log('caught starships error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }

  public getFilms() {
    const url = `${this.baseUrl}/films/`;
    return this.http.get(url).pipe(
      map((resp: any) => resp.results),
      catchError((err: any) => {
        console.log('caught films error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }
}
