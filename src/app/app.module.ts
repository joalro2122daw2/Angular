import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PipeBusqueda, Tenda} from './Comic';

/* Prueba de slider con Angular Material */
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 



@NgModule({
  declarations: [
    Tenda,
    PipeBusqueda
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [Tenda]
})
export class AppModule { }
