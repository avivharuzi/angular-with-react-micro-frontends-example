import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shell-cart-remote',
  template: `
    <shared-react-container
      [importFactory]="importFactory"
    ></shared-react-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartRemoteComponent {
  importFactory = () => import('cart/Component');
}
