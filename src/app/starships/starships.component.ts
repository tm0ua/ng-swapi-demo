import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from '../api.service';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent, RouterLink],
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

  public getId(url: string): string {
    return this.api.getId(url);
  }
}
