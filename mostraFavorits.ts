import { Component ,HostBinding} from '@angular/core';
import { Comic } from './Comic';

@Component({
    selector: 'favorits',
    templateUrl: 'mostraFavorits.html',
})
export class MostraFavorits{
    static llistaFavorits:Comic[] = [];
    titol:String="Els teus favorits"
    static visible:boolean = false;

    get staticVisible()
    {
      return MostraFavorits.visible;
    }    
    get staticLlistaFavorits()
    {
        return MostraFavorits.llistaFavorits;
    }

}
