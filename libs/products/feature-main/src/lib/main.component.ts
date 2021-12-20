import { cartService } from '@angular-with-react-micro-frontends-example/shared/data-access-cart';
import {
  Product,
  productsService,
} from '@angular-with-react-micro-frontends-example/shared/data-access-products';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  loading$ = productsService.loading$;
  products$ = productsService.products$;

  ngOnInit(): void {
    productsService.loadProducts().then();
  }

  addItem(product: Product): void {
    cartService.addItem(product);
  }
}
