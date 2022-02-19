import { TemplateBindingParseResult } from '@angular/compiler';
import { Component ,HostBinding} from '@angular/core';
import { Comic } from './Comic';

@Component({
    //selector: 'mostra',
    templateUrl: 'mostraForm.html',
    /*
    animations: [
      trigger('cardFlip', [
        state('default', style({
          transform: 'none'
        })),
        state('flipped', style({
          transform: 'rotateY(180deg)'
        })),
        transition('default => flipped', [
          animate('400ms')
        ]),
        transition('flipped => default', [
          animate('200ms')
        ])
      ])
      ,
      trigger('moveCenter',[
  
        state('true',style({transform:'scale(1,1) translateX(50%)'})),      
        state('false',style({transform:'scale(0,0)'})),
        transition('1 => 0',animate('1000ms')),
        transition('0 => 1',animate('1000ms'))
      ]),
  
      trigger('border',[
  
        state('true',style({border:'solid 10px black'})),      
        state('false',style({border:'solid 0px black'})),
        transition('1 => 0',animate('1000ms')),
        transition('0 => 1',animate('1000ms'))
      ])      
    ]
    */
  })

  export class GestorMostres{
      public static visible:boolean =false;
      public static seleccionats:Comic[];

      constructor()
      {
        //GestorMostres.seleccionats = new Array<Comic>();
        //let c = new Comic("Varis",1973,"../assets/aventures/adventure.jpg",Object(),112,"tapa blanda","aventures")
        //GestorMostres.seleccionats.push(c);
      }

      get staticVisible()
      {
        return GestorMostres.visible;
      }

      get staticSeleccionats()
      {
        return GestorMostres.seleccionats;
      }
  }
  

