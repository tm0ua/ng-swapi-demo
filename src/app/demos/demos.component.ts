import { Component } from '@angular/core';
import { ComponentService } from '../component.service';
import { ComponentOneComponent } from '../component-one/component-one.component';
import { ComponentTwoComponent } from '../component-two/component-two.component';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [ComponentOneComponent, ComponentTwoComponent, ParentComponent],
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.less'
})
export class DemosComponent {

  constructor(private service: ComponentService) {}

  public displayText() {
    this.service.displayText('You just displayed a message here!');
  }
}
