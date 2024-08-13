import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  public getPeople() {
    const url = `${this.baseUrl}/people/`;
    return this.http.get(url).pipe(map((resp: any) => resp.results));
  }

  public getStarships() {
    const url = `${this.baseUrl}/starships/`;
    return this.http.get(url).pipe(map((resp: any) => resp.results));
  }
}
