import {
  createActionGroup,
  props,
  emptyProps,
  createAction,
} from '@ngrx/store';
import { Purchase } from '../../models/purchase.model';

export const PurchaseActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Purchase': props<{ purchase: Purchase }>(),
    'Remove Purchase': props<{ purchaseId: string }>(),
    'Load Purchases': emptyProps,
    'Empty Purchases': emptyProps,
  },
});

export const loadPurchases = createAction('  Load Purchases');
export const loadPurchasesSuccess = createAction(
  'Load Purchases Success',
  props<{ purchases: Purchase[] }>()
);
