import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

const baseUrl = "https://swapi.dev/api";
const peopleUrl = `${baseUrl}/people`;
const starshipsUrl = `${baseUrl}/starships`;
const filmsUrl = `${baseUrl}/films`;
const vehiclesUrl = `${baseUrl}/vehicles`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getId(url: string): string {
    // Return empty string if undefined.
    return url.match(/\d+/)?.[0] ?? "";
  }

  public getPeople() {
    return this.http.get(peopleUrl).pipe(
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
    return this.http.get(`${peopleUrl}/${id}`).pipe(
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
    return this.http.get(starshipsUrl).pipe(
      map((resp: any) => resp.results),
      catchError((err: any) => {
        console.log('caught starships error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }

  public getStarshipById(id: string) {
    return this.http.get(`${starshipsUrl}/${id}`).pipe(
      map((resp: any) => resp),
      catchError((err: any) => {
        console.log('caught starship detail error and rethrowing');
        return throwError(() => err);
      })
    )
  }

  public getFilms() {
    return this.http.get(filmsUrl).pipe(
      map((resp: any) => resp.results),
      catchError((err: any) => {
        console.log('caught films error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Gets the film details using the film url.
   * @param url the film url
   * @returns the film details
   */
  public getFilmDetails(url: string) {
    return this.http.get(url).pipe(
      map((resp: any) => resp),
      catchError((err: any) => {
        console.log('caught film detail error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }

  public getVehicles() {
    return this.http.get(vehiclesUrl).pipe(
      map((resp: any) => resp.results),
      catchError((err: any) => {
        console.log('caught vehicles error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Gets the vehicle details using the vehicle url.
   * @param url the vehicle url
   * @returns the vehicle details
   */
  public getVehicleDetails(url: string) {
    return this.http.get(url).pipe(
      map((resp: any) => resp),
      catchError((err: any) => {
        console.log('caught vehicle detail error and rethrowing', err);
        return throwError(() => err);
      })
    );
  }
}
