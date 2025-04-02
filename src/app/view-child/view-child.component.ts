import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentThreeComponent } from "../component-three/component-three.component";

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ComponentThreeComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.less'
})
export class ViewChildComponent {
  @ViewChild('myElement') element!: ElementRef;
  // Directly access another ng component.
  @ViewChild(ComponentThreeComponent) child!: ComponentThreeComponent;
  
  /**
   * Modify element inside the ngAfterViewInit life cycle to ensures
   * the view has been fully initialized and the element is available.
   */
  ngAfterViewInit() {
    this.element.nativeElement.innerText = 'I am the parent.';
  }

  public changeParentText() {
    this.element.nativeElement.innerText = 'Text has been changed.';
  }

  public changeChildText() {
    this.child.changeText();
  }
}
