import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { userCartSelector, Product } from '@org/common/store';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'org-lib-cart',
  standalone: true,
  imports: [CommonModule, ProductListComponent, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$ = this.store.select(userCartSelector);

  constructor(private readonly store: Store, private router: Router) {}

  ngOnInit(): void {
    // this.store.dispatch(cartActions.loadCartById({ id: 3 }));
  }

  delete(product: Product) {
    console.log(product);
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
