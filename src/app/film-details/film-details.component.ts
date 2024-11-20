import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [AsyncPipe, KeyValuePipe],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.less'
})
export class FilmDetailsComponent {
  @Input() details$: Observable <any> | undefined;
  // @Output() filmDetailsClickedEvent = new EventEmitter<any>();

  /**
   * This is the recommended usage for Angular 18 instead of "@Output" (see above).
   */
  public filmDetailsClickedEvent = output<any>();


  public onItemClick(item: any) {
    this.filmDetailsClickedEvent.emit(item);
  }
}
