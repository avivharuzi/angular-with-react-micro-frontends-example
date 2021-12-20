import { Product } from '@angular-with-react-micro-frontends-example/shared/data-access-products';

export interface CartItem {
  id: number;
  product: Product;
  amount: number;
}
