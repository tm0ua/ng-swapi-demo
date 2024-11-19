import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent, RouterLink],
  templateUrl: './species.component.html',
  styleUrl: './species.component.less'
})
export class SpeciesComponent {
  public species$: Observable<any> | undefined;
  public isLoading = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.species$ = this.api.getSpecies().pipe((tap(() => this.isLoading = false)));
  }

  public getId(url: string): string {
    return this.api.getId(url);
  }
}
