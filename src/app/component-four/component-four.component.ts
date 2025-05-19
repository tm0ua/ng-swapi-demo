import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentService } from '../component.service';
import { AsyncPipe } from '@angular/common';

export interface componentFourData {
  id: string,
  text: string,
  isCompleted: boolean
}

@Component({
  selector: 'app-component-four',
  standalone: true,
  imports: [ AsyncPipe ],
  templateUrl: './component-four.component.html',
  styleUrl: './component-four.component.less',
  // Example of change detection strategy.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFourComponent {
  @Input() data!: componentFourData;

  private text: string = '';

  public filter$: Observable<boolean>;

  constructor(private service: ComponentService) {
    this.filter$ = this.service.filter$;
  }

  ngOnInit(){
    console.log('ngOnInit');
    // Saved the original value.
    this.text = this.data.text;
  }

  public checkRender(): boolean {
    console.log('component rendered');
    return true;
  }

  public resetData(): void {
    this.data.text = this.text;
    console.log(`rest by child: ${this.data.text}`);
  }

  public changeFilter(): void {
    this.service.filter$.next(!this.service.filter$.getValue());
  }
}
