import './main.module.scss';

import * as React from 'react';
import { Subscription } from 'rxjs';

import {
  CartItem,
  cartService,
} from '@angular-with-react-micro-frontends-example/shared/data-access-cart';
import Item from '@angular-with-react-micro-frontends-example/cart/ui-item';

export class Main extends React.PureComponent {
  override state: { cartItems: CartItem[] } = { cartItems: [] };

  private cartItemsSubscription: Subscription | null = null;

  removeCartItem = (id: number): void => {
    cartService.removeItem(id);
  };

  override componentDidMount(): void {
    this.cartItemsSubscription = cartService.cartItems$.subscribe(
      (cartItems) => {
        this.setState({ cartItems });
      }
    );
  }

  override componentWillUnmount(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }

  override render(): JSX.Element {
    const noCartItems = (
      <p className="alert alert-warning text-center">You have an empty cart</p>
    );

    const cartItems = (
      <div className="rounded shadow p-4">
        <div className="row">
          {this.state.cartItems.map(({ id, product, quantity }) => {
            return (
              <Item
                key={id}
                title={product.title}
                image={product.image}
                price={product.price}
                quantity={quantity}
                itemRemoved={() => this.removeCartItem(id)}
              />
            );
          })}
        </div>
      </div>
    );

    return (
      <div>
        <div>{this.state.cartItems.length === 0 ? noCartItems : cartItems}</div>
      </div>
    );
  }
}

export default Main;
