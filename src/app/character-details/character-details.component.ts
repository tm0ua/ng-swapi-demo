import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [AsyncPipe, KeyValuePipe, LoaderComponent],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.less'
})
export class CharacterDetailsComponent {
  public person$: Observable<any> | undefined;
  public isLoading = true;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Since character details page is only created once, subscribe to route params to detech url change to get id.
    this.route.paramMap.subscribe((params) => {
      this.isLoading = true;
      // Get character id from url. Id is set in the character component view.
      this.person$ = this.api.getPersonById(params.get('id') ?? "0").pipe(tap(() => this.isLoading = false));
    })

    /**
     * This example works with the concept of loading a new character details page each time a character is clicked.
     */
    // this.person$ = this.api.getPersonById(this.route.snapshot.params['id'] ?? "0").pipe(tap(() => this.isLoading = false));
  }
}
