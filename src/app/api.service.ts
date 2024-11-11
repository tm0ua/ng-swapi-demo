import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  public getId(url: string): string {
    // Return empty string if undefined.
    return url.match(/\d+/)?.[0] ?? "";
  }

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

  /**
   * Gets the character details using the character id.
   * @param id the character id
   * @returns the character details
   */
  public getPersonById(id: string) {
    const url = `${this.baseUrl}/people/${id}/`;
    return this.http.get(url).pipe(
      map((resp: any) => resp),
      catchError((err: any) => {
        console.log('caught person detail error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Gets the character details using the character url.
   * @param url the character url
   * @returns the character details
   */
  public getPersonDetails(url: string) {
    return this.http.get(url).pipe(
      map((resp: any) => resp),
      catchError((err: any) => {
        console.log('caught person detail error and rethrowing', err);
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

  public getStarshipById(id: string) {
    const url = `${this.baseUrl}/starships/${id}/`;
    return this.http.get(url).pipe(
      map((resp: any) => resp),
      catchError((err: any) => {
        console.log('caught starship detail error and rethrowing');
        return throwError(() => err);
      })
    )
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
