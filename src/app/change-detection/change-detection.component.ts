import { Component } from '@angular/core';
import { componentFourData, ComponentFourComponent } from '../component-four/component-four.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [ComponentFourComponent],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.less'
})
export class ChangeDetectionComponent {
  public componentFourData: componentFourData[] = [
    {
      id: '1',
      text: 'Data A',
      isCompleted: true
    },
    {
      id: '2',
      text: 'Data B',
      isCompleted: true
    },
    {
      id: '3',
      text: 'Data C',
      isCompleted: true
    }
  ]

  public changeText(event: Event): void {
    /**
     * If child component (i.e. ComponentFourComponent) does NOT have change detection set to "OnPush" 
     * each time this method is called the child component will automatically re-rendered
     * even though the data it's consuming (i.e. componentFourData) did not change at all.
     */
    console.log(`changed text: ${(event.target as HTMLInputElement).value}`);
  }

  public changeData(): void {
    /**
     * If the component consuming the data (componentFourData) has change detection set to "OnPush"
     * simply modifying the data object will not update the view, hence the component does not get re-rendered
     * cause it no longer triggers changed detection for the component since objects are "by reference".0
     */
    // this.componentFourData.forEach((data, index) => data.text = `${data.text}${index}`);

    /**
     * Instead created a new reference of the object to trigger change detection for the component
     * (e.g. this.componentFourData[0] = {...this.componentFourData[0], text: 'hello'});
     */
    this.componentFourData = this.componentFourData.map((data, index) => ({...data, text: `${data.text}${index}`}))
    console.log(`changed by parent: ${this.componentFourData.map((data) => data.text)}`);
  }
}
