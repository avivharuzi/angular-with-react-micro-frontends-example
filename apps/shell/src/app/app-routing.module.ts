import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('products/Module').then(
        ({ RemoteEntryModule }) => RemoteEntryModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart-remote/cart-remote.module').then(
        ({ CartRemoteModule }) => CartRemoteModule
      ),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
