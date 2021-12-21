import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { cartService } from '@angular-with-react-micro-frontends-example/shared/data-access-cart';
import {
  Product,
  productsService,
} from '@angular-with-react-micro-frontends-example/shared/data-access-products';

@Component({
  selector: 'products-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  products$ = productsService.products$;

  ngOnInit(): void {
    productsService.loadProducts().then();
  }

  addItem(product: Product): void {
    cartService.addItem(product);
  }
}
