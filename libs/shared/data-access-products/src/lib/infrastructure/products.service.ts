import { delay, of } from 'rxjs';

import {
  productsQuery,
  ProductsQuery,
  ProductsStore,
  productsStore,
} from '../state';
import { MOCK_PRODUCTS } from './mock-products';

export class ProductsService {
  products$ = this.productsQuery.selectAll();

  constructor(
    private productsStore: ProductsStore,
    private productsQuery: ProductsQuery
  ) {}

  loadProducts(): void {
    of(MOCK_PRODUCTS)
      .pipe(delay(400))
      .subscribe({
        next: (products) => this.productsStore.set(products),
        error: () => this.productsStore.setError('Failed to fetch products.'),
      });
  }
}

export const productsService = new ProductsService(
  productsStore,
  productsQuery
);
