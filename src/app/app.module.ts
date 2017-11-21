import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JsonApiModule } from 'angular2-jsonapi';

import { Datastore } from './datastore';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonApiModule
  ],
  providers: [
    Datastore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
