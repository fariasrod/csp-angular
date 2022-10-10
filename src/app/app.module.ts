import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InlineStylesCspModule } from './inline-styles-csp/inline-styles-csp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InlineStylesCspModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
