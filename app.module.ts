import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {PipeBusqueda, Tenda} from './Tenda';

/* Prueba de slider con Angular Material */
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { GestorMostres } from './GestorMostres';

const encaminaments: Routes = [
  { path: '', redirectTo: './Tenda', pathMatch: 'full' },
  { path: 'Tenda', component: Tenda },
  { path: 'Tenda',component:PipeBusqueda},
  { path: 'Mostra',component:GestorMostres}
];


@NgModule({
  
  declarations: [
    Tenda,
    PipeBusqueda,
    GestorMostres
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    RouterModule.forRoot(encaminaments)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [Tenda,GestorMostres]
})
export class AppModule { }
