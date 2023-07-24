import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Product, orderAction, userCartSelector } from '@org/common/store';
import { TotalAmountPipe } from '../total-amount.pipe';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private store: Store, private router: Router) {}

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

  placeOrder(products: Product[]) {
    this.store.dispatch(
      orderAction.placeOrder({
        order: {
          id: 1,
          userId: 2,
          status: 'Placed',
          totalAmount: 0,
          products: products,
          date: new Date(),
        },
      })
    );

    this.router.navigate(['/orders']);
    console.info("Your order has been placed!");

  }
}
