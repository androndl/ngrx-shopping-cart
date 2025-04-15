import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { CartActions } from '../../state/cart-state/cart.actions';
import {
  selectCart,
  selectCartTotal,
} from '../../state/cart-state/cart.selectors';
import { Purchase } from '../../models/purchase.model';
import { PurchaseActions } from '../../state/purchase-state/purchase.actions';
import { selectPurchasesState } from '../../state/purchase-state/purchase.selectors';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, MaterialModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent implements OnInit {
  purchases$!: Observable<ReadonlyArray<Purchase>>;
  cart$: Observable<ReadonlyArray<Product>>;
  cartTotal$: Observable<number>;
  cartTotal: any;
  purchases: any;
  displayedColumns: string[] = [
    'position',
    'name',
    'price',
    'amount',
    'remove',
  ];
  constructor(private store: Store) {
    this.cart$ = this.store.select(selectCart);
    this.cartTotal$ = this.store.select(selectCartTotal);
    this.purchases$ = this.store.select(selectPurchasesState); // Selects the purchases
  }

  ngOnInit(): void {
    this.cartTotal$.subscribe((event: any) => (this.cartTotal = event));
    this.purchases$.subscribe((event: any) => (this.purchases = event));
  }

  /**
   * removed a specific product from the cart
   * @param productId id of product to be removed
   */
  onRemoveFromCart(productId: string) {
    this.store.dispatch(CartActions.removeProduct({ productId }));
  }

  /**
   * empties the current cart
   */
  emptyCart() {
    this.store.dispatch(CartActions.emptyCart());
  }

  /**
   * receives and saves the cart into the store
   * @param cart cart item received
   */
  addPurchase(cart: any) {
    const purchase: Purchase = {
      id: this.purchases.length,
      name: 'purchase ' + (this.purchases.length + 1),
      cost: this.cartTotal,
      totalItems: cart.length,
      discount: 0,
    };
    this.store.dispatch(PurchaseActions.addPurchase({ purchase }));
    this.store.dispatch(CartActions.emptyCart());
  }

  /**
   * updates the amount of a specific product
   * @param event triggered event updating
   * @param productId the item id to be updated
   */
  onQuantityChange(event: Event, productId: string) {
    const inputElement = event.target as HTMLInputElement;
    let quantity = parseInt(inputElement.value, 10);
    if (quantity > 0) {
      this.store.dispatch(CartActions.updateQuantity({ productId, quantity }));
    } else {
      // if the amount is 0 or less, we remove it automatically from the cart
      this.onRemoveFromCart(productId);
    }
  }
}
