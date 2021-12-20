import './main.module.scss';
import {
  CartItem,
  cartService,
} from '@angular-with-react-micro-frontends-example/shared/data-access-cart';

import * as React from 'react';

export class Main extends React.PureComponent {
  override state: { cartItems: CartItem[] } = { cartItems: [] };

  removeCartItem = (id: number) => {
    cartService.removeItem(id);
  };

  override componentDidMount() {
    cartService.cartItems$.subscribe((cartItems) => {
      this.setState({ cartItems });
    });
  }

  override render() {
    const noCartItems = <p>No cart items</p>;

    const cartItems = this.state.cartItems.map(({ id, product, amount }) => {
      return (
        <div>
          <h3>{product.title}</h3>
          <img height="100px" src={product.image} alt={product.title} />
          <p>Amount: {amount}</p>
          <button onClick={() => this.removeCartItem(id)}>Remove item</button>
        </div>
      );
    });

    return (
      <div>{this.state.cartItems.length === 0 ? noCartItems : cartItems}</div>
    );
  }
}

export default Main;
