import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  standalone: false,
  styleUrl: './car-form.component.scss',
})
export class CarFormComponent {
  form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      make: [''],
      model: [''],
      price: [''],
    });
  }
  submit() {
    console.log(this.form.value);
  }
}
