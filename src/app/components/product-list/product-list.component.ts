import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { CartActions } from '../../state/cart-state/cart.actions';
import { selectProducts } from '../../state/cart-state/cart.selectors';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, MaterialModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit{
  products$!: Observable<ReadonlyArray<Product>>;
  newProduct = <Product>{};
  displayedColumns: string[] = ['position', 'name', 'price', 'purchase'];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadProducts()); // Dispatch load products action
    this.products$ = this.store.select(selectProducts); // Select products from the store
  }
/**
 * updates the store adding a new product to the cart
 * @param product item to be stored 
 */
  onAddToCart(product: Product) {
    this.store.dispatch(CartActions.addProduct({ product }));
  }
}
