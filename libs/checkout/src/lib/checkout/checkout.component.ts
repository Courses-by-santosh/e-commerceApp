import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { userCartSelector } from '@org/common/store';
import { TotalAmountPipe } from '../total-amount.pipe';

@Component({
  selector: 'org-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    TotalAmountPipe,
  ],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm!: FormGroup;

  cart$ = this.store.select(userCartSelector);

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      creditcardnumber: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(16),
        ],
      ],
      creditcardexpiration: ['', Validators.required],
      creditcardcvv: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
      nameoncard: ['', Validators.required],
    });
  }

  placeOrder() {
    console.info("Your order has been placed!");
  }
}
