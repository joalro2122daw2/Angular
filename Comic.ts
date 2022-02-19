import { CardData } from "./Tenda";
import { Tenda } from "./Tenda";

export class Comic{
    id:number;
    autor:string ="";
    any:number = 0;
    preu:number = 0;
    imatge:string = "";
    clicked:Function=Object;
    data:CardData = {state:'default'};
    seleccionat:boolean=false;
    tenda:Tenda;
    //dades:string="";
    dades:Object
    tapa:string="";
    tema:string="";
  
  
    constructor(item:number,author:string,year:number,image:string,shop:Tenda,price:number,cover:string,topic:string)
    {
      this.id = item; 
      this.autor = author;
      this.any = year;
      this.imatge = image;
      this.clicked = this.aparadorClicked;
      this.tenda = shop;
      this.preu = price;
      this.tapa = cover;           
      this.dades = Object.create(this);
      this.tema = topic;
    }
  
    aparadorClicked()
    {      
      this.tenda.comicseleccionat = true;
      console.log("Seleccionat: " + this.tenda.comicseleccionat);
      this.seleccionat = true;
      this.tenda.contingut = this;
      if(this.tenda.comicseleccionat)
        this.tenda.mostrarDades();     
    }

    toString()
    {
      return "Ref: " + this.id + "<br>Autor: " + this.autor + "<br>Any: " + this.any +
       "<br>Preu: " + this.preu +"€";
    }
  }