import { Component ,HostBinding} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Comic } from "./Comic"



import {
  trigger,
  state,
  style,
  animate,
  transition,
  
} from '@angular/animations';
import { compileDeclareDirectiveFromMetadata, NONE_TYPE } from '@angular/compiler';


  export interface CardData {
    state: 'default' | 'flipped' | 'matched';
}


@Pipe({name:'pipeCercaAny'})
export class PipeBusqueda implements PipeTransform{
  transform(list:Comic[],anycercat:string):any{
    //alert(anycercat);
    let resultat = list ? list.filter(comic => comic.any.toString() === anycercat):[new Comic("sense resultats",0,"",new Tenda(),0,"","")];
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
  cercaVisible:boolean = false;
  comicseleccionat:boolean = false;
  contingut:string="";
  paraulaCercada:string="";
  titol = "Últimes novetats";

  llistaComics=[
    /*Aventures*/
    new Comic("Victor Mora",2000,"../assets/aventures/capitan_trueno.jpg",this,20,"tapa dura","aventures"),
    new Comic("Hugo Pratt",1977,"../assets/aventures/cortomaltes.jpeg",this,24,"tapa dura","aventures"),
    new Comic("Dick Matena",1983,"../assets/aventures/kirk.jpg",this,4,"tapa blanda","aventures"),
    new Comic("Herge",1972,"../assets/aventures/tintin.jpg",this,30,"tapa dura","aventures"),
    new Comic("Yves Sete",2008,"../assets/aventures/blake.jpg",this,32,"tapa dura","aventures"),
    new Comic("R.E.Howard",1998,"../assets/aventures/bizarras.jpg",this,17,"tapa blanda","aventures"),
    new Comic("Varis",1971,"../assets/aventures/strange.jpg",this,120,"tapa blanda","aventures"),
    new Comic("Varis",1973,"../assets/aventures/adventure.jpg",this,112,"tapa blanda","aventures"),
    new Comic("Enrique Fernandez",2010,"../assets/aventures/isla.jpg",this,31,"tapa dura","aventures"),    
    new Comic("Jacques Tardi",1970,"../assets/aventures/adele.jpeg",this,53,"tapa dura","aventures"),    
    new Comic("Raulf",2021,"../assets/aventures/crom.jpg",this,27,"tapa dura","aventures"),
    new Comic("Tibet",1965,"../assets/aventures/ric.jpg",this,133,"tapa dura","aventures"),
    new Comic("Beatrice Bottet",2016,"../assets/aventures/odisea.jpg",this,17,"tapa blanda","aventures"),
    new Comic("José Pablo García",2015,"../assets/aventures/joselito.jpg",this,15,"tapa blanda","aventures"),
    new Comic("Ivan Gil",2021,"../assets/aventures/dragones.jpg",this,17,"tapa blanda","aventures"),
    new Comic("Novaro",1968,"../assets/aventures/rakitin.jpg",this,173,"tapa blanda","aventures"),
    new Comic("Ryan Andrews",2021,"../assets/aventures/perdimos.jpeg",this,26,"tapa blanda","aventures"),
    new Comic("Charlier Giraud",2003,"../assets/aventures/blueberry.jpg",this,31,"tapa dura","aventures"),
    new Comic("Rodolphe",2021,"../assets/aventures/amazonia.jpg",this,23,"tapa dura","aventures"),
    new Comic("Juan Diaz Canales",2019,"../assets/aventures/Fraternity.jpg",this,29,"tapa dura","aventures"),
    /* Humor */
    new Comic("Fco. Ibañez",1979,"../assets/humor/botones_sacarino.jpeg",this,30,"tapa dura","humor"),
    new Comic("Varis",1979,"../assets/humor/elvivora.jpg",this,120,"tapa blanda","humor"),
    new Comic("Fco. Ibañez",2020,"../assets/humor/mortadelo_filemon.jpeg",this,24,"tapa blanda","humor"),
    new Comic("Jan",2019,"../assets/humor/superlopez.jpeg",this,87,"tapa blanda","humor"),
    new Comic("Varis",1974,"../assets/humor/TBO.gif",this,100,"tapa dura","humor"),
    new Comic("Varis",2014,"../assets/humor/eljueves.jpg",this,28,"tapa blanda","humor"),
    new Comic("Varis",1975,"../assets/humor/makoki.jpg",this,115,"tapa dura","humor"),
    new Comic("Kim",1988,"../assets/humor/martinez.jpg",this,67,"tapa blanda","humor"),
    new Comic("Iva",1989,"../assets/humor/putamili.jpg",this,170,"tapa blanda","humor"),
    new Comic("Iva",1992,"../assets/humor/makinavaja.jpg",this,180,"tapa blanda","humor"),
    new Comic("Gallardo",1982,"../assets/humor/ninato.jpg",this,200,"tapa dura","humor"),
    new Comic("Forges",2021,"../assets/humor/forges.jpeg",this,56,"tapa blanda","humor"),
    new Comic("Kino",1995,"../assets/humor/mafalda.webp",this,78,"tapa dura","humor"),
    new Comic("Escobar",1973,"../assets/humor/zipizape.jpeg",this,89,"tapa dura","humor"),
    new Comic("Matt Groening",1973,"../assets/humor/simpson.jpeg",this,32,"tapa blanda","humor"),
    new Comic("Gilbert Shelton",1977,"../assets/humor/freak.jpeg",this,45,"tapa blanda","humor"),
    new Comic("Jim Davis",2015,"../assets/humor/garfield.jpg",this,54,"tapa dura","humor"),
    new Comic("Schulz",1993,"../assets/humor/snoopy.jpg",this,65,"tapa dura","humor"),
    new Comic("Martin Adams",1998,"../assets/humor/dilbert.png",this,32,"tapa dura","humor"),
    new Comic("Oscar",1997,"../assets/humor/jordicule.jpeg",this,25,"tapa blanda","humor"),
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

      public mostrarAparador(ev:Event){
        let bt = this.getName(ev);
        this.NovetatsVisible = false;
        this.cercaVisible = true;
        switch(bt)
        {
          case "btHumor":
            this.titol = "Comics d'Humor";
            this.llistacerca = this.llistaComics.filter((comic) => comic.tema === "humor");
            break;
          case "btAventures":
            this.titol = "Comics d'aventures";
            this.llistacerca = this.llistaComics.filter((comic) => comic.tema === "aventures");
            break;
        }                
      }

      public mostrarNovetats(ev:Event)
      {
        this.titol = "Últimes novetats";
        this.NovetatsVisible = true;
        this.cercaVisible = false;

      }
      
      cercaAny(paraula:string):void{
        this.NovetatsVisible = false;
        this.cercaVisible = true;
        this.llistacerca = [];
        this.titol = "Resultat de la cerca";       
        this.llistacerca = this.llistaComics.filter((comic) => comic.any.toString() === paraula);
        //alert("Quantitat cercada: " + this.llistacerca.length);                 
        //this.llistacerca.forEach(x => alert("A cercaAny: " + x.autor))
      }

      getValue(event: Event): string {
        return (event.target as HTMLInputElement).value;
      }
      getName(event: Event): string {
        return (event.target as HTMLInputElement).name;
      }

      

    }

    