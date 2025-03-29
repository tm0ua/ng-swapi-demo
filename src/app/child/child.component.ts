import { Component, Input, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.less'
})
export class ChildComponent {
  @Input() text: string | undefined;

  /**
   * This is the recommended usage for Angular 18 instead of "@Output" (see below).
   * @Output() childClickedEvent = new EventEmitter<any>();
   */
  public childClickedEvent = output<string>();


  // This is required in order to detect when the SendToChild button is clicked.
  ngOnChanges(changes: SimpleChanges) {
    this.text = changes['text'].currentValue;
  }

  public sentToParent() {
    this.childClickedEvent.emit("This message is from the child.")
  }
}
