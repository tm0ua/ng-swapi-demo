import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.less'
})
export class ParentComponent {
  public parentMsg: string | undefined;
  public childMsg: string | undefined;

  public sendToChild() {
    this.parentMsg = 'This message is from the parent.';
  }

  public display(msg: string) {
    this.childMsg = msg;
  }
}
