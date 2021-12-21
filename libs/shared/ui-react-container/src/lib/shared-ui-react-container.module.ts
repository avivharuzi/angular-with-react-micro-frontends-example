import { NgModule } from '@angular/core';

import { ReactContainerComponent } from './react-container.component';

@NgModule({
  declarations: [ReactContainerComponent],
  exports: [ReactContainerComponent],
})
export class SharedUiReactContainerModule {}
