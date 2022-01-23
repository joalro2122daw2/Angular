import { Component ,HostBinding} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  
} from '@angular/animations';
import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';

  export interface CardData {
    //imageId: string;
    state: 'default' | 'flipped' | 'matched';
}

export class Comic{
  autor:string ="";
  any:number = 0;
  imatge:string = "";
  clicked:Function=Object;
  data:CardData = {state:'default'};
  seleccionat:boolean=false;
  dades:string="";

  constructor(author:string,year:number,image:string,data:string)
  {
    this.autor = author;
    this.any = year;
    this.imatge = image;
    this.clicked = this.aparadorClicked;
    this.dades = data;
  }

  aparadorClicked()
  {
    //alert("clicat");
    this.seleccionat = !this.seleccionat;
  }
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
    ,
    trigger('moveCenter',[
      state('true',style({transform:'scale(2,2)'})),
      state('false',style({transform:'scale(1,1)'}))
    ])
    
  ]
})


export class Tenda {

  NovetatsVisible:boolean = true;
  AventuresVisible:boolean = false;
  HumorVisible:boolean = false;
  MangaVisible:boolean = false;
  TerrorVisible:boolean = false;
  ThrillerVisible:boolean = false;
  FantasticVisible:boolean = false;

  llistaComics=[
    new Comic("Fco. Ibañez",1978,"../assets/humor/botones_sacarino.jpeg","../assets/humor/Botones-data.png"),
    /*
    new Comic("Fco. Ibañez",2020,"../assets/humor/mortadelo_filemon.jpeg"),
    new Comic("Jan",2019,"../assets/humor/superlopez.jpeg"),
    new Comic("Varis",1974,"../assets/humor/TBO.gif"),
    new Comic("Varis",2014,"../assets/humor/eljueves.jpg"),
    new Comic("Varis",1979,"../assets/humor/elvivora.jpg"),
    new Comic("Varis",1975,"../assets/humor/makoki.jpg"),
    new Comic("Kim",1988,"../assets/humor/martinez.jpg"),
    new Comic("Iva",1989,"../assets/humor/putamili.jpg"),
    new Comic("Iva",1992,"../assets/humor/makinavaja.jpg"),
    new Comic("Gallardo",1982,"../assets/humor/ninato.jpg"),
    new Comic("Forges",2021,"../assets/humor/forges.jpeg"),
    new Comic("Kino",1995,"../assets/humor/mafalda.webp"),
    new Comic("Escobar",1973,"../assets/humor/zipizape.jpeg"),
    new Comic("Matt Groening",1973,"../assets/humor/simpson.jpeg"),
    new Comic("Gilbert Shelton",1977,"../assets/humor/freak.jpeg"),
    new Comic("Jim Davis",2015,"../assets/humor/garfield.jpg"),
    new Comic("Schulz",1993,"../assets/humor/snoopy.jpg"),
    new Comic("Martin Adams",1998,"../assets/humor/dilbert.png"),
    new Comic("Oscar",1997,"../assets/humor/jordicule.jpeg"),
    */
  ]

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

      

      public mostrarAventures(){
        this.AventuresVisible = true;
        this.NovetatsVisible = false;
        this.HumorVisible = false;
        this.FantasticVisible = false;
        this.MangaVisible = false;
        this.ThrillerVisible = false;
        this.TerrorVisible = false;
      }
      public mostrarHumor(){
        this.HumorVisible = true;
        this.AventuresVisible = false;
        this.NovetatsVisible = false;
        this.FantasticVisible = false;
        this.MangaVisible = false;
        this.ThrillerVisible = false;
        this.TerrorVisible = false;
      }
      public mostrarFantastic(){
        this.FantasticVisible = true;
        this.HumorVisible = false;
        this.AventuresVisible = false;
        this.NovetatsVisible = false;
        this.MangaVisible = false;
        this.ThrillerVisible = false;
        this.TerrorVisible = false;
      }
      public mostrarManga(){
        this.MangaVisible = true;
        this.FantasticVisible = false;
        this.HumorVisible = false;
        this.AventuresVisible = false;
        this.NovetatsVisible = false;
        this.ThrillerVisible = false;
        this.TerrorVisible = false;
      }
      public mostrarThriller(){
        this.ThrillerVisible = true;
        this.MangaVisible = false;
        this.FantasticVisible = false;
        this.HumorVisible = false;
        this.AventuresVisible = false;
        this.NovetatsVisible = false;
        this.TerrorVisible = false;
      }

      public mostrarTerror(){
        this.TerrorVisible = true;
        this.ThrillerVisible = false;
        this.MangaVisible = false;
        this.FantasticVisible = false;
        this.HumorVisible = false;
        this.AventuresVisible = false;
        this.NovetatsVisible = false;
      }

    }
