// Action describes what happened and contains any necessary payload (data)

import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Product': props<{ product: Product }>(),
    'Remove Product': props<{ productId: string }>(),
    'Empty Cart': emptyProps,
    'Update Quantity': props<{ productId: string; quantity: number }>(),
    'Load Products': emptyProps
  },
});

export const CartApiActions = createActionGroup({
  source: 'Cart API',
  events: {
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: string }>(),
  },
});