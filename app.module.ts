import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {PipeBusqueda, Tenda} from './Tenda';

import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { GestorMostres } from './GestorMostres';
import { MostraFavorits } from './mostraFavorits';

const encaminaments: Routes = [
  { path: '', redirectTo: './Tenda', pathMatch: 'full' },
  { path: 'tenda',component:GestorMostres},
  { path: 'mostra',component:GestorMostres},
  { path: 'mostraFavorits',component:MostraFavorits}
];


@NgModule({  
  declarations: [
    Tenda,
    PipeBusqueda,
    GestorMostres,
    MostraFavorits
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
