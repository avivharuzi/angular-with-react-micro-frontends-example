import { QueryEntity } from '@datorama/akita';

import { Product } from '../entities';
import { ProductsState, productsStore, ProductsStore } from './products.store';

export class ProductsQuery extends QueryEntity<ProductsState, Product> {
  constructor(protected override store: ProductsStore) {
    super(store);
  }
}

export const productsQuery = new ProductsQuery(productsStore);
