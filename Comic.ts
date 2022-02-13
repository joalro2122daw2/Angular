import { CardData } from "./Tenda";
import { Tenda } from "./Tenda";

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
    tema:string="";
  
  
    constructor(author:string,year:number,image:string,shop:Tenda,price:number,cover:string,topic:string)
    {
      this.autor = author;
      this.any = year;
      this.imatge = image;
      this.clicked = this.aparadorClicked;
      this.tenda = shop;
      this.preu = price;
      this.tapa = cover;
      this.dades = "Autor: " + this.autor + "<br>Any: " + this.any + "<br>Preu: " + this.preu + "€" + "<br>Tapa: " + this.tapa ; 
      this.tema = topic;
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