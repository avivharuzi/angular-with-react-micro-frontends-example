import { SharedUiReactContainerModule } from '@angular-with-react-micro-frontends-example/shared/ui-react-container';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedUiReactContainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
