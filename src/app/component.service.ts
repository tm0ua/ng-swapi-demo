import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private display = new Subject<string>();
  public display$ = this.display.asObservable();

  constructor() { }

  public displayText(msg: string): void {
    this.display.next(msg);
  }

  public getPeople(): Observable<any> {
    console.log("get people called.");
    return of([
      {
        "name": "John Doe",
        "age": 30,
        "address": {
          "street": "123 Main St",
          "city": "Anytown",
          "state": "CA"
        },
        "sex": "Male",
        "hobbies": ["reading", "hiking", "coding"]
      },
      {
        "name": "Jane Doe",
        "age": 25,
        "address": {
          "street": "456 Super St",
          "city": "Mycity",
          "state": "CO"
        },
        "sex": "Female",
        "hobbies": ["skiing", "swimming", "running"]
      }
    ])
  }
}
