import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from '../api.service';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.less'
})
export class StarshipsComponent {
  public starships$: Observable<any> | undefined;
  public isLoading = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.starships$ = this.api.getStarships().pipe(tap(() => this.isLoading = false));
  }
}
