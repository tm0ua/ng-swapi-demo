import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent, KeyValuePipe],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.less'
})
export class StarshipDetailsComponent {
  public starship$: Observable<any> | undefined;
  public isLoading = true;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.starship$ = this.api.getStarshipById(this.getIdFromUrl()).pipe(tap(() => this.isLoading = false));
  }

  private getIdFromUrl(): string {
    return this.route.snapshot.params['id'] ?? "0";
  }
}
