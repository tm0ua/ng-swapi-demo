import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component-three',
  standalone: true,
  imports: [],
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.less'
})
export class ComponentThreeComponent {
  @ViewChild('myDiv') div!: ElementRef;

  public changeText() {
    this.div.nativeElement.innerText = 'Text has been changed.';
  }
}
