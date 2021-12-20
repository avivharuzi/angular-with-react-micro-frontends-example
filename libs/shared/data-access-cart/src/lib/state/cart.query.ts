import { QueryEntity } from '@datorama/akita';

import { CartItem } from '../entities';
import { CartState, cartStore, CartStore } from './cart.store';

export class CartQuery extends QueryEntity<CartState, CartItem> {
  constructor(protected override store: CartStore) {
    super(store);
  }
}

export const cartQuery = new CartQuery(cartStore);
