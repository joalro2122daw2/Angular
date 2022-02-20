import { TemplateBindingParseResult } from '@angular/compiler';
import { Component ,HostBinding} from '@angular/core';
import { Comic } from './Comic';


@Component({
    selector: 'mostra',
    templateUrl: 'mostraForm.html',
  })

  export class GestorMostres{
      public static visible:boolean =false;
      public static seleccionats:Comic[];
      public static mostraaleat:boolean = false;

      get staticVisible()
      {
        return GestorMostres.visible;
      }

      get staticMostraAleat()
      {
        return GestorMostres.mostraaleat;
      }

      get staticSeleccionats()
      {
        return GestorMostres.seleccionats;
      }
      
  }
  

