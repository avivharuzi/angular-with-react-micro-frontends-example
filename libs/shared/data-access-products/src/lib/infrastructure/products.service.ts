import { delay, firstValueFrom, of } from 'rxjs';

import {
  productsQuery,
  ProductsQuery,
  ProductsStore,
  productsStore,
} from '../state';
import { MOCK_PRODUCTS } from './mock-products';

export class ProductsService {
  products$ = this.productsQuery.selectAll();
  loading$ = this.productsQuery.selectLoading();

  constructor(
    private productsStore: ProductsStore,
    private productsQuery: ProductsQuery
  ) {}

  async loadProducts(): Promise<void> {
    try {
      this.productsStore.setLoading(true);
      const products = await firstValueFrom(
        of(MOCK_PRODUCTS).pipe(delay(2000))
      );
      this.productsStore.set(products);
    } catch (error) {
      this.productsStore.setError('Failed to fetch products.');
    }
    this.productsStore.setLoading(false);
  }
}

export const productsService = new ProductsService(
  productsStore,
  productsQuery
);
