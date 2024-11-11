import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.less'
})
export class CharactersComponent {
  public people$: Observable<any> | undefined;
  public isLoading = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.people$ = this.api.getPeople().pipe(tap(() => this.isLoading = false));
  }

  public getId(url: string): string {
    return this.api.getId(url);
  }
}
