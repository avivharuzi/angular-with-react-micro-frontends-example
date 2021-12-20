import './main.module.scss';
import {
  CartItem,
  cartService,
} from '@angular-with-react-micro-frontends-example/shared/data-access-cart';

import * as React from 'react';

export class Main extends React.PureComponent {
  override state: { cartItems: CartItem[] } = { cartItems: [] };

  // add = (text: string) => todosService.add(text);
  //
  // toggleTodo = (id: ID) => todosService.complete(id);
  //
  // deleteTodo = (id: ID) => todosService.delete(id);
  //
  // changeFilter = ({ target: { value } }) => {
  //   todosService.updateFilter(value);
  // };
  //

  override componentDidMount() {
    // todosQuery.selectVisibleTodos$
    //   .pipe(untilDestroyed(this))
    //   .subscribe(todos => this.setState({ todos }));
    console.log('mount');
    cartService.cartItems$.subscribe((cartItems) => {
      console.log(cartItems);
    });
  }

  override render() {
    return (
      <div>
        <h1>Main</h1>
      </div>
    );
  }
}

export default Main;
