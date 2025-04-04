import { Component } from '@angular/core';
import { ComponentService } from '../component.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.less'
})
export class ComponentOneComponent {
  public text$: Observable<string> | undefined;

  constructor(private service: ComponentService) {}

  ngOnInit() {
    // Async Pipe auto subscribe when used in the view.
    this.text$ = this.service.display$;
  }
}
