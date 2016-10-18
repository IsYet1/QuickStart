import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgGridModule } from 'angular2-grid';

import { AppComponent }  from './app.component';
import {GridsSampleComponent} from './grids/grids-sample.component';

import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

@NgModule({
  imports: [ BrowserModule, NgGridModule, HttpModule ],
  declarations: [ AppComponent, GridsSampleComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
