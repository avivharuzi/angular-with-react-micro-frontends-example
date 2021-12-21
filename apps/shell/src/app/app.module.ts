import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedUiReactContainerModule } from '@angular-with-react-micro-frontends-example/shared/ui-react-container';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, SharedUiReactContainerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
