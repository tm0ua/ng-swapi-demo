import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../api.service';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { FilmDetailsComponent } from '../film-details/film-details.component';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent, FilmDetailsComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.less'
})
export class FilmsComponent {
  public films$: Observable<any> | undefined;
  // The film-details component takes an observable as an input.
  public filmDetails$: Observable<any> | undefined;
  public details: any;
  public isLoading = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.films$ = this.api.getFilms().pipe(tap(() => this.isLoading = false));
  }

  public onItemClick(item: any): void {
    this.filmDetails$ = this.api.getFilmDetails(item.url);
  }

  /**
   * Example takes in the click event from the film-details (child) component.
   * This method is binded in the view to the child attribute: filmDetailsClickedEvent.
   * @param item film details object
   */
  public filmDetailsClicked(item: any) {
    this.details = item;
  }
}
