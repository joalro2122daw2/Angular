import { Component ,HostBinding} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

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
  tapa:string="";


  constructor(author:string,year:number,image:string,shop:Tenda,price:number,cover:string)
  {
    this.autor = author;
    this.any = year;
    this.imatge = image;
    this.clicked = this.aparadorClicked;
    this.tenda = shop;
    this.preu = price;
    this.tapa = cover;
    this.dades = "Autor: " + this.autor + "<br>Any: " + this.any + "<br>Preu: " + this.preu + "€" + "<br>Tapa: " + this.tapa ; 
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

@Pipe({name:'pipeCercaAny'})
export class PipeBusqueda implements PipeTransform{
  transform(list:Comic[],anycercat:string):any{
    //alert(anycercat);
    let resultat = list ? list.filter(comic => comic.any.toString() === anycercat):[new Comic("sense resultats",0,"",new Tenda(),0,"")];
    //alert("A pipe: " + resultat[0].autor);
    return resultat;
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
  cercaVisible:boolean = false;
  contingut:string="";
  paraulaCercada:string="";

  llistaComics=[
    new Comic("Fco. Ibañez",1979,"../assets/humor/botones_sacarino.jpeg",this,30,"tapa dura"),
    new Comic("Varis",1979,"../assets/humor/elvivora.jpg",this,120,"tapa blanda"),
    new Comic("Fco. Ibañez",2020,"../assets/humor/mortadelo_filemon.jpeg",this,24,"tapa blanda"),
    new Comic("Jan",2019,"../assets/humor/superlopez.jpeg",this,87,"tapa blanda"),
    new Comic("Varis",1974,"../assets/humor/TBO.gif",this,100,"tapa dura"),
    new Comic("Varis",2014,"../assets/humor/eljueves.jpg",this,28,"tapa blanda"),
    new Comic("Varis",1975,"../assets/humor/makoki.jpg",this,115,"tapa dura"),
    new Comic("Kim",1988,"../assets/humor/martinez.jpg",this,67,"tapa blanda"),
    new Comic("Iva",1989,"../assets/humor/putamili.jpg",this,170,"tapa blanda"),
    new Comic("Iva",1992,"../assets/humor/makinavaja.jpg",this,180,"tapa blanda"),
    new Comic("Gallardo",1982,"../assets/humor/ninato.jpg",this,200,"tapa dura"),
    new Comic("Forges",2021,"../assets/humor/forges.jpeg",this,56,"tapa blanda"),
    new Comic("Kino",1995,"../assets/humor/mafalda.webp",this,78,"tapa dura"),
    new Comic("Escobar",1973,"../assets/humor/zipizape.jpeg",this,89,"tapa dura"),
    new Comic("Matt Groening",1973,"../assets/humor/simpson.jpeg",this,32,"tapa blanda"),
    new Comic("Gilbert Shelton",1977,"../assets/humor/freak.jpeg",this,45,"tapa blanda"),
    new Comic("Jim Davis",2015,"../assets/humor/garfield.jpg",this,54,"tapa dura"),
    new Comic("Schulz",1993,"../assets/humor/snoopy.jpg",this,65,"tapa dura"),
    new Comic("Martin Adams",1998,"../assets/humor/dilbert.png",this,32,"tapa dura"),
    new Comic("Oscar",1997,"../assets/humor/jordicule.jpeg",this,25,"tapa blanda"),
  ]
  llistacerca:Comic[] = [];


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

      cercaAny(paraula:string):void{
        this.llistacerca = this.llistaComics.filter((comic) => comic.any.toString() === paraula);
        //alert("Quantitat cercada: " + this.llistacerca.length);
        if(this.llistacerca.length > 0)
        {
          this.cercaVisible = true;
          this.NovetatsVisible = false;
          this.AventuresVisible = false;
          this.HumorVisible = false;
          this.MangaVisible = false;
          this.TerrorVisible = false;
          this.ThrillerVisible = false;
          this.FantasticVisible = false;
          this.comicseleccionat = false;
        }
        else
        {
          this.cercaVisible = false;
          this.NovetatsVisible = true;
        }
        //this.llistacerca.forEach(x => alert("A cercaAny: " + x.autor))
      }

      getValue(event: Event): string {
        return (event.target as HTMLInputElement).value;
      }

    }

    