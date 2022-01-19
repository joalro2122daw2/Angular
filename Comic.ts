import { Component ,HostBinding} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  
} from '@angular/animations';

  export interface CardData {
    //imageId: string;
    state: 'default' | 'flipped' | 'matched';
}


@Component({
  selector: 'aplicacio',
  templateUrl: 'comicsShop.html',
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
  ]
})


export class Comic {

      data: CardData = {
       // imageId: "pDGNBK9A0sk",
        state: "default"
      };
    
      cardClicked() {
        if (this.data.state === "default") {
          this.data.state = "flipped";
        } else {
          this.data.state = "default";
        }
      }
    }
