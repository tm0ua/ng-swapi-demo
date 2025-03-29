import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private display = new Subject<string>();
  public display$ = this.display.asObservable();

  constructor() { }

  public displayText(msg: string) {
    this.display.next(msg);
  }
}
