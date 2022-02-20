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

      get staticVisible()
      {
        return GestorMostres.visible;
      }

      get staticSeleccionats()
      {
        return GestorMostres.seleccionats;
      }
  }
  

