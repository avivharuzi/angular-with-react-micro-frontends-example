import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { CartItem } from '../entities';

export type CartState = EntityState<CartItem>;

@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<CartState, CartItem> {
  constructor() {
    super();
  }
}

export const cartStore = new CartStore();
