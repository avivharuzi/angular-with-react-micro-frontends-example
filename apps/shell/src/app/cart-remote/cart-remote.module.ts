import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUiReactContainerModule } from '@angular-with-react-micro-frontends-example/shared/ui-react-container';

import { CartRemoteComponent } from './cart-remote.component';

@NgModule({
  declarations: [CartRemoteComponent],
  imports: [
    SharedUiReactContainerModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CartRemoteComponent },
    ]),
  ],
})
export class CartRemoteModule {}
