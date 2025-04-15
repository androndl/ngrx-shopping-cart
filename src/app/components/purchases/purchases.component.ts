import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Purchase } from '../../models/purchase.model';
import {
  purchasesTotalCost,
  selectPurchasesState,
} from '../../state/purchase-state/purchase.selectors';
import { PurchaseActions } from '../../state/purchase-state/purchase.actions';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-purchases',
  imports: [CommonModule, MaterialModule],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.scss',
})
export class PurchasesComponent {
  purchases$!: Observable<ReadonlyArray<Purchase>>;
  purchasesTotal$: Observable<number>;
  allPurchases: any;
  displayedColumns: string[] = ['position', 'name', 'totalItems', 'cost'];
  constructor(private store: Store) {
    this.purchases$ = this.store.select(selectPurchasesState); // Selects the purchases
    this.purchasesTotal$ = this.store.select(purchasesTotalCost);// Selects the total purchases stored
  }

  /**
   * empties the current purchases
   */
  emptyPurchases() {
    this.store.dispatch(PurchaseActions.emptyPurchases());
  }
}
