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
        state: "default"
      };

      data2:CardData={
        state:"default"
      };
      data3:CardData={
        state:"default"
      };
      data4:CardData={
        state:"default"
      };
      data5:CardData={
        state:"default"
      };
      data6:CardData={
        state:"default"
      };
    
      cardClicked() {
        if (this.data.state === "default") {
          this.data.state = "flipped";
        } else {
          this.data.state = "default";
        }
      }

      cardClicked2() {
        if (this.data2.state === "default") {
          this.data2.state = "flipped";
        } else {
          this.data2.state = "default";
        }
      }

      cardClicked3() {
        if (this.data3.state === "default") {
          this.data3.state = "flipped";
        } else {
          this.data3.state = "default";
        }
      }

      cardClicked4() {
        if (this.data4.state === "default") {
          this.data4.state = "flipped";
        } else {
          this.data4.state = "default";
        }
      }

      cardClicked5() {
        if (this.data5.state === "default") {
          this.data5.state = "flipped";
        } else {
          this.data5.state = "default";
        }
      }

      cardClicked6() {
        if (this.data6.state === "default") {
          this.data6.state = "flipped";
        } else {
          this.data6.state = "default";
        }
      }

    }
