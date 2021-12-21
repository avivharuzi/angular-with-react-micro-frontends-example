import './main.module.scss';

import * as React from 'react';
import { Subscription } from 'rxjs';

import { cartService } from '@angular-with-react-micro-frontends-example/shared/data-access-cart';
import { HeaderProps } from '@angular-with-react-micro-frontends-example/shared/data-access-header';

interface MainState {
  cartTotalQuantity: number;
}

export class Main extends React.Component<HeaderProps, MainState> {
  override state: MainState = { cartTotalQuantity: 0 };

  private cartTotalQuantitySubscription: Subscription | null = null;

  override componentDidMount(): void {
    this.cartTotalQuantitySubscription =
      cartService.cartTotalQuantity$.subscribe((cartTotalQuantity) =>
        this.setState({ cartTotalQuantity })
      );
  }

  override componentWillUnmount(): void {
    if (this.cartTotalQuantitySubscription) {
      this.cartTotalQuantitySubscription.unsubscribe();
    }
  }

  override render(): JSX.Element {
    return (
      <nav className="navbar navbar-light bg-light shadow-sm sticky-top">
        <div className="container">
          <a
            onClick={() => this.props.linkClicked('/')}
            className="navbar-brand d-flex align-items-center"
          >
            <img
              src="assets/logos/angular.svg"
              alt="Angular"
              width="30px"
              height="30px"
              className="d-inline-block"
            />
            <span className="mx-2">+</span>
            <img
              src="assets/logos/react.svg"
              alt="React"
              width="30px"
              height="30px"
              className="d-inline-block"
            />
            <span className="d-inline-block ms-3">Micro Frontends</span>
          </a>
          <ul className="ms-2 navbar-nav flex-row flex-grow-1 justify-content-between align-items-center">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => this.props.linkClicked('/products')}
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.linkClicked('/cart')}
                className="nav-link"
              >
                <span className="position-relative">
                  <img
                    alt=""
                    width="30px"
                    height="30px"
                    src="assets/icons/cart.svg"
                  />
                  <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {this.state.cartTotalQuantity}
                    <span className="visually-hidden">cart items</span>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Main;
