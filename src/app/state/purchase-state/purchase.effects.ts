import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { loadPurchases, loadPurchasesSuccess } from './purchase.actions';
import { Purchase } from '../../models/purchase.model';

@Injectable()
export class PurchaseEffects {
  constructor() {}
}
