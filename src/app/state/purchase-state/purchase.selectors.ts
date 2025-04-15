import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Purchase } from '../../models/purchase.model';

export const selectPurchasesState =
  createFeatureSelector<ReadonlyArray<Purchase>>('purchase');

export const selectPurchases = createSelector(
  selectPurchasesState,
  (state) => state
);

export const purchasesTotalCost = createSelector(
  selectPurchasesState,
  (purchase) => purchase.reduce((total, purchase) => total + purchase.cost, 0)
);
