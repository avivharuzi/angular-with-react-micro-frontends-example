import { map } from 'rxjs';

import { Product } from '@angular-with-react-micro-frontends-example/shared/data-access-products';

import { CartItem } from '../entities';
import { CartQuery, cartQuery, CartStore, cartStore } from '../state';

export class CartService {
  cartItems$ = this.cartQuery.selectAll();

  cartTotalQuantity$ = this.cartQuery.selectAll().pipe(
    map((cartItems) => {
      return cartItems.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.quantity;
      }, 0);
    })
  );

  constructor(private cartStore: CartStore, private cartQuery: CartQuery) {}

  addItem(product: Product): void {
    const id = product.id;
    let cartItem: CartItem = {
      id,
      product,
      quantity: 1,
    };

    const existingCartItem = this.cartQuery.getEntity(id);
    if (existingCartItem) {
      cartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
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
