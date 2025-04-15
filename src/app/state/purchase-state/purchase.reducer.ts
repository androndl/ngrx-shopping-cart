import { createReducer, on } from '@ngrx/store';
import { Purchase } from '../../models/purchase.model';
import { PurchaseActions } from './purchase.actions';

export const initialProductsState: ReadonlyArray<Purchase> = [];
// Reducer for cart (initially empty)

export const purchaseReducer = createReducer(
  initialProductsState,
  on(PurchaseActions.addPurchase, (state, { purchase }) => {
    return [...state, purchase];
  }),
  on(PurchaseActions.emptyPurchases, ({}, {}) => {
    return [];
  })
);
