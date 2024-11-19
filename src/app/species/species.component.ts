import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [AsyncPipe],
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
}
