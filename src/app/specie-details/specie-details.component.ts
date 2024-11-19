import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-specie-details',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent, KeyValuePipe],
  templateUrl: './specie-details.component.html',
  styleUrl: './specie-details.component.less'
})
export class SpecieDetailsComponent {
  public specieDetails$: Observable<any> | undefined;
  public isLoading = true;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.specieDetails$ = this.api.getSpecieById(this.getIdFromUrl()).pipe((tap(() => this.isLoading = false)));
  }

  private getIdFromUrl(): string {
    return this.route.snapshot.params['id'] ?? "0";
  }
}
