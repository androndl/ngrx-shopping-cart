import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productsReducer, cartReducer } from './state/cart-state/cart.reducer';
import { CartEffects } from './state/cart-state/cart.effects';
import { provideHttpClient } from '@angular/common/http';
import { purchaseReducer } from './state/purchase-state/purchase.reducer';
import { MaterialModule } from './modules/material/material.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      products: productsReducer,
      cart: cartReducer,
      purchase: purchaseReducer,
    }),
    provideHttpClient(),
    provideEffects([CartEffects]),
    MaterialModule
  ],
 
};
