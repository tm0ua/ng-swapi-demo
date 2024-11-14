import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
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
}
