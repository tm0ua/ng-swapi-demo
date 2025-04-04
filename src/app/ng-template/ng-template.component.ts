import { Component } from '@angular/core';
import { ComponentService } from '../component.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [AsyncPipe, NgTemplateOutlet],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.less'
})
export class NgTemplateComponent {
  public data$: Observable<any> | undefined;

  constructor(private service: ComponentService) {}

  ngOnInit() {
    this.data$ = this.service.getPeople();
  }
}
