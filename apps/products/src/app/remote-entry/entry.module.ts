import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
          import(
            '@angular-with-react-micro-frontends-example/products/feature-main'
          ).then(({ ProductsFeatureMainModule }) => ProductsFeatureMainModule),
      },
    ]),
  ],
})
export class RemoteEntryModule {}
