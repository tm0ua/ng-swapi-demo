import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.less'
})
export class CharactersComponent {
  // @Input()
  // set id(id: string) {
  //   this.id = id;
  // }
  public people$: Observable<any> | undefined;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.people$ = this.api.getPeople();
  }
}
