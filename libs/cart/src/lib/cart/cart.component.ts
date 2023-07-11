import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { cartActions } from '../store/cart.action';
import { selectCart, selectCurrentCart } from '../store/cart.selector';

@Component({
  selector: 'org-lib-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$ = this.store.select(selectCurrentCart);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(cartActions.loadCartById({ id: 3 }));
  }
}
