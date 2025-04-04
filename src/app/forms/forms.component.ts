import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.less'
})
export class FormsComponent {
  // @ViewChild ('firstNameInput') firstNameInput!: ElementRef;
  // @ViewChild ('lastNameInput') lastNameInput!: ElementRef;

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

  public clearName() {
    this.firstName = '';
    this.lastName = '';
  }

  public clearVehicle() {
    this.autoGroup.get('year')?.setValue('');
    this.autoGroup.get('make')?.setValue('');
    this.autoGroup.get('model')?.setValue('');
  }
}
