import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-star-wars',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './star-wars.component.html',
  styleUrl: './star-wars.component.less'
})
export class StarWarsComponent {

}
