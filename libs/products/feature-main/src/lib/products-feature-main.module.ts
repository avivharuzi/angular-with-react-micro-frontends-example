import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsUiCardModule } from '@angular-with-react-micro-frontends-example/products/ui-card';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MainComponent },
    ]),
    ProductsUiCardModule,
  ],
  declarations: [MainComponent],
})
export class ProductsFeatureMainModule {}
