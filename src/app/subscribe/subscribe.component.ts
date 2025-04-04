import { Component } from '@angular/core';
import { ComponentOneComponent } from '../component-one/component-one.component';
import { ComponentTwoComponent } from '../component-two/component-two.component';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [ComponentOneComponent, ComponentTwoComponent],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.less'
})
export class SubscribeComponent {

  constructor(private service: ComponentService) {}

  public displayText() {
    this.service.displayText('You just displayed a message here');
  }
}
