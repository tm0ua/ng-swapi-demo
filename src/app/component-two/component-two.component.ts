import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentService } from '../component.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.less'
})
export class ComponentTwoComponent {
  public text$: Observable<string> | undefined;

  constructor(private service: ComponentService) {}

  ngOnInit() {
    // Async Pipe auto subscribe when used in the view.
    this.text$ = this.service.display$;
  }
}
