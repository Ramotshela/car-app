import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-car-rental',
  standalone: false,
  templateUrl: './carrental.component.html',
  styleUrl: './carrental.component.scss',
})
export class CarRentalComponent {
  rentalForm: FormGroup;
  private readonly fb = inject(FormBuilder);
  constructor() {
    this.rentalForm = this.fb.group(
      {
        location: ['', Validators.required],
        pickupDate: ['', Validators.required],
        returnDate: ['', Validators.required],
      },
      { validators: this.dateRangeValidator }
    );
  }
  selectedFilter= '';

  filters = [
    { id: 'all', label: 'All Items' },
    {
      id: 'electronics',
      label: 'Electronics',
      children: [
        {
          id: 'laptop',
          label: 'Laptops',
          children: [
            { id: 'gaming', label: 'Gaming Laptops' },
            { id: 'ultrabook', label: 'Ultrabooks' },
          ],
        },
        {
          id: 'phone',
          label: 'Phones',
          children: [
            { id: 'android', label: 'Android Phones' },
            { id: 'ios', label: 'iPhones' },
          ],
        },
      ],
    },
    { id: 'furniture', label: 'Furniture' },
  ];
  dateRangeValidator(control: AbstractControl) {
    const pickup = control.get('pickupDate')?.value;
    const ret = control.get('returnDate')?.value;

    if (!pickup || !ret) return null;

    const pickupDate = new Date(pickup);
    const returnDate = new Date(ret);

    return returnDate > pickupDate ? null : { dateRangeInvalid: true };
  }

  onSubmit() {
    if (this.rentalForm.valid) {
      console.log('Form Submitted', this.rentalForm.value);
    } else {
      this.rentalForm.markAllAsTouched();
    }
  }

  get f() {
    return this.rentalForm.controls;
  }
}
