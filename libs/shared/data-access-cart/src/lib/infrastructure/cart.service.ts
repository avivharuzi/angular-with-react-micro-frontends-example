import { Product } from '@angular-with-react-micro-frontends-example/shared/data-access-products';

import { CartItem } from '../entities';
import { CartQuery, cartQuery, CartStore, cartStore } from '../state';

export class CartService {
  cartItems$ = this.cartQuery.selectAll();

  constructor(private cartStore: CartStore, private cartQuery: CartQuery) {}

  addItem(product: Product): void {
    const id = product.id;
    let cartItem: CartItem = {
      id,
      product,
      amount: 1,
    };

    const existingCartItem = this.cartQuery.getEntity(id);
    if (existingCartItem) {
      cartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
    }

    this.cartStore.upsert(id, cartItem);
  }

  removeItem(id: number): void {
    this.cartStore.remove(id);
  }

  clear(): void {
    this.cartStore.set([]);
  }
}

export const cartService = new CartService(cartStore, cartQuery);
