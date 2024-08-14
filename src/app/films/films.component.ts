import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../api.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.less'
})
export class FilmsComponent {
  public films$: Observable<any> | undefined;
  public isLoading = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.films$ = this.api.getFilms().pipe(tap(() => this.isLoading = false));
  }
}
