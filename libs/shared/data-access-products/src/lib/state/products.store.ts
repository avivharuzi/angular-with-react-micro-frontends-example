import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { Product } from '../entities';

export type ProductsState = EntityState<Product>;

@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Product> {
  constructor() {
    super();
  }
}

export const productsStore = new ProductsStore();
