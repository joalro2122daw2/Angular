import { Component ,HostBinding} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  
} from '@angular/animations';
import { compileDeclareDirectiveFromMetadata, NONE_TYPE } from '@angular/compiler';

  export interface CardData {
    //imageId: string;
    state: 'default' | 'flipped' | 'matched';
}

export class Comic{
  autor:string ="";
  any:number = 0;
  preu:number = 0;
  imatge:string = "";
  clicked:Function=Object;
  data:CardData = {state:'default'};
  seleccionat:boolean=false;
  tenda:Tenda;
  dades:string="";


  constructor(author:string,year:number,image:string,shop:Tenda,price:number)
  {
    this.autor = author;
    this.any = year;
    this.imatge = image;
    this.clicked = this.aparadorClicked;
    this.tenda = shop;
    this.preu = price;
    this.dades = "Autor: " + this.autor + "<br>Any: " + this.any + "<br>Preu: " + this.preu + "€"; 
  }

  aparadorClicked()
  {
    //alert("clicat");
    this.seleccionat = !this.seleccionat;
    this.tenda.comicseleccionat = !this.tenda.comicseleccionat;
    this.tenda.contingut = this.dades;
    if(this.tenda.comicseleccionat)
      this.tenda.mostrarDades();
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
})


export class Tenda {

  NovetatsVisible:boolean = true;
  AventuresVisible:boolean = false;
  HumorVisible:boolean = false;
  MangaVisible:boolean = false;
  TerrorVisible:boolean = false;
  ThrillerVisible:boolean = false;
  FantasticVisible:boolean = false;
  comicseleccionat:boolean = false;
  contingut:string="";

  llistaComics=[
    new Comic("Fco. Ibañez",1978,"../assets/humor/botones_sacarino.jpeg",this,30),
    new Comic("Fco. Ibañez",2020,"../assets/humor/mortadelo_filemon.jpeg",this,24),
    new Comic("Jan",2019,"../assets/humor/superlopez.jpeg",this,87),
    new Comic("Varis",1974,"../assets/humor/TBO.gif",this,100),
    new Comic("Varis",2014,"../assets/humor/eljueves.jpg",this,28),
    new Comic("Varis",1979,"../assets/humor/elvivora.jpg",this,120),
    new Comic("Varis",1975,"../assets/humor/makoki.jpg",this,115),
    new Comic("Kim",1988,"../assets/humor/martinez.jpg",this,67),
    new Comic("Iva",1989,"../assets/humor/putamili.jpg",this,170),
    new Comic("Iva",1992,"../assets/humor/makinavaja.jpg",this,180),
    new Comic("Gallardo",1982,"../assets/humor/ninato.jpg",this,200),
    new Comic("Forges",2021,"../assets/humor/forges.jpeg",this,56),
    new Comic("Kino",1995,"../assets/humor/mafalda.webp",this,78),
    new Comic("Escobar",1973,"../assets/humor/zipizape.jpeg",this,89),
    new Comic("Matt Groening",1973,"../assets/humor/simpson.jpeg",this,32),
    new Comic("Gilbert Shelton",1977,"../assets/humor/freak.jpeg",this,45),
    new Comic("Jim Davis",2015,"../assets/humor/garfield.jpg",this,54),
    new Comic("Schulz",1993,"../assets/humor/snoopy.jpg",this,65),
    new Comic("Martin Adams",1998,"../assets/humor/dilbert.png",this,32),
    new Comic("Oscar",1997,"../assets/humor/jordicule.jpeg",this,25),
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

      public mostrarDades()
      {
        let div = document.getElementById("DadesComic");
        if(div)
          div.innerHTML = this.contingut;
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
