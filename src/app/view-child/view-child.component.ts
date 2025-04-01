import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.less'
})
export class ViewChildComponent {
  @ViewChild('myElement') element!: ElementRef;
  
  /**
   * Modify element inside the ngAfterViewInit life cycle to ensures
   * the view has been fully initialized and the element is available.
   */
  ngAfterViewInit() {
    this.element.nativeElement.innerText = 'Hello world!';
  }

  public changeText() {
    this.element.nativeElement.innerText = 'Text has been changed.'
  }
}
