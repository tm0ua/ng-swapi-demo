import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.less'
})
export class FormsComponent {
  /**
   * Template-Driven example.
   */
  public firstName: string | undefined;
  public lastName: string | undefined;

  /**
   * Reactive Form example.
   */
  public autoGroup: FormGroup = new FormGroup({
    year: new FormControl(''),
    make: new FormControl(''),
    model: new FormControl(''),
  })

  public clearName(): void {
    this.firstName = '';
    this.lastName = '';
  }

  public clearVehicle(): void {
    this.autoGroup.get('year')?.setValue('');
    this.autoGroup.get('make')?.setValue('');
    this.autoGroup.get('model')?.setValue('');
  }
}
