import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { LoaderComponent } from '../loader/loader.component';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [LoaderComponent, AsyncPipe],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.less'
})
export class VehiclesComponent {
  public vehicles$: Observable<any> | undefined;
  public isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.vehicles$ = this.api.getVehicles().pipe(tap(() => this.isLoading = false));
  }
}
