import { Component } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";
import { ViewChildComponent } from "../view-child/view-child.component";
import { NgTemplateComponent } from "../ng-template/ng-template.component";
import { SubscribeComponent } from "../subscribe/subscribe.component";
import { FormsComponent } from "../forms/forms.component";

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [ParentComponent, ViewChildComponent, NgTemplateComponent, SubscribeComponent, FormsComponent],
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.less'
})
export class DemosComponent {

}
