import { Product } from '../entities';
import {
  productsQuery,
  ProductsQuery,
  ProductsStore,
  productsStore,
} from '../state';

export class ProductsService {
  products$ = this.productsQuery.selectAll();

  constructor(
    private productsStore: ProductsStore,
    private productsQuery: ProductsQuery
  ) {}

  async loadProducts(): Promise<void> {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products: Product[] = await response.json();
      this.productsStore.set(products);
    } catch (error) {
      this.productsStore.setError('Failed to fetch products.');
    }
  }
}

export const productsService = new ProductsService(
  productsStore,
  productsQuery
);
