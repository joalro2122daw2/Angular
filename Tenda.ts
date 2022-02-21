import { Component ,HostBinding} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Comic } from "./Comic"
import { GestorMostres } from './GestorMostres';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MostraFavorits } from './mostraFavorits';

  export interface CardData {
    state: 'default' | 'flipped' | 'matched';
}


@Pipe({name:'pipeCercaAny'})
export class PipeBusqueda implements PipeTransform{
  transform(list:Comic[],anycercat:string):any{    
    let resultat = list ? list.filter(comic => comic.any.toString() === anycercat):[new Comic(-1,"sense resultats",0,"",new Tenda(),0,"","")];    
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

      state('true',style({transform:'scale(1,1) translateX(175%) translateY(160%)'})),      
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
  favoritsVisible:boolean = false;
  comicseleccionat:boolean = false;  
  contingut:Comic;
  paraulaCercada:string="";
  titol = "Últimes novetats";
  db:Object;
  
  


  llistaComics=[
    /*Aventures*/
    new Comic(1,"Victor Mora",2000,"../assets/aventures/capitan_trueno.jpg",this,20,"tapa dura","aventures"),
    new Comic(2,"Hugo Pratt",1977,"../assets/aventures/cortomaltes.jpeg",this,24,"tapa dura","aventures"),
    new Comic(3,"Dick Matena",1983,"../assets/aventures/kirk.jpg",this,4,"tapa blanda","aventures"),
    new Comic(4,"Herge",1972,"../assets/aventures/tintin.jpg",this,30,"tapa dura","aventures"),
    new Comic(5,"Yves Sete",2008,"../assets/aventures/blake.jpg",this,32,"tapa dura","aventures"),
    new Comic(6,"R.E.Howard",1998,"../assets/aventures/bizarras.jpg",this,17,"tapa blanda","aventures"),
    new Comic(7,"Varis",1971,"../assets/aventures/strange.jpg",this,120,"tapa blanda","aventures"),
    new Comic(8,"Varis",1973,"../assets/aventures/adventure.jpg",this,112,"tapa blanda","aventures"),
    new Comic(9,"Enrique Fernandez",2010,"../assets/aventures/isla.jpg",this,31,"tapa dura","aventures"),    
    new Comic(10,"Jacques Tardi",1970,"../assets/aventures/adele.jpeg",this,53,"tapa dura","aventures"),    
    new Comic(11,"Raulf",2021,"../assets/aventures/crom.jpg",this,27,"tapa dura","aventures"),
    new Comic(12,"Tibet",1965,"../assets/aventures/ric.jpg",this,133,"tapa dura","aventures"),
    new Comic(13,"Beatrice Bottet",2016,"../assets/aventures/odisea.jpg",this,17,"tapa blanda","aventures"),
    new Comic(14,"José Pablo García",2015,"../assets/aventures/joselito.jpg",this,15,"tapa blanda","aventures"),
    new Comic(15,"Ivan Gil",2021,"../assets/aventures/dragones.jpg",this,17,"tapa blanda","aventures"),
    new Comic(16,"Novaro",1968,"../assets/aventures/rakitin.jpg",this,173,"tapa blanda","aventures"),
    new Comic(17,"Ryan Andrews",2021,"../assets/aventures/perdimos.jpeg",this,26,"tapa blanda","aventures"),
    new Comic(18,"Charlier Giraud",2003,"../assets/aventures/blueberry.jpg",this,31,"tapa dura","aventures"),
    new Comic(19,"Rodolphe",2021,"../assets/aventures/amazonia.jpg",this,23,"tapa dura","aventures"),
    new Comic(20,"Juan Diaz Canales",2019,"../assets/aventures/Fraternity.jpg",this,29,"tapa dura","aventures"),
    /* Humor */
    new Comic(21,"Fco. Ibañez",1979,"../assets/humor/botones_sacarino.jpeg",this,30,"tapa dura","humor"),
    new Comic(22,"Varis",1979,"../assets/humor/elvivora.jpg",this,120,"tapa blanda","humor"),
    new Comic(23,"Fco. Ibañez",2020,"../assets/humor/mortadelo_filemon.jpeg",this,24,"tapa blanda","humor"),
    new Comic(24,"Jan",2019,"../assets/humor/superlopez.jpeg",this,87,"tapa blanda","humor"),
    new Comic(25,"Varis",1974,"../assets/humor/TBO.gif",this,100,"tapa dura","humor"),
    new Comic(26,"Varis",2014,"../assets/humor/eljueves.jpg",this,28,"tapa blanda","humor"),
    new Comic(27,"Varis",1975,"../assets/humor/makoki.jpg",this,115,"tapa dura","humor"),
    new Comic(28,"Kim",1988,"../assets/humor/martinez.jpg",this,67,"tapa blanda","humor"),
    new Comic(29,"Iva",1989,"../assets/humor/putamili.jpg",this,170,"tapa blanda","humor"),
    new Comic(30,"Iva",1992,"../assets/humor/makinavaja.jpg",this,180,"tapa blanda","humor"),
    new Comic(31,"Gallardo",1982,"../assets/humor/ninato.jpg",this,200,"tapa dura","humor"),
    new Comic(32,"Forges",2021,"../assets/humor/forges.jpeg",this,56,"tapa blanda","humor"),
    new Comic(33,"Kino",1995,"../assets/humor/mafalda.webp",this,78,"tapa dura","humor"),
    new Comic(34,"Escobar",1973,"../assets/humor/zipizape.jpeg",this,89,"tapa dura","humor"),
    new Comic(35,"Matt Groening",1973,"../assets/humor/simpson.jpeg",this,32,"tapa blanda","humor"),
    new Comic(36,"Gilbert Shelton",1977,"../assets/humor/freak.jpeg",this,45,"tapa blanda","humor"),
    new Comic(37,"Jim Davis",2015,"../assets/humor/garfield.jpg",this,54,"tapa dura","humor"),
    new Comic(38,"Schulz",1993,"../assets/humor/snoopy.jpg",this,65,"tapa dura","humor"),
    new Comic(39,"Martin Adams",1998,"../assets/humor/dilbert.png",this,32,"tapa dura","humor"),
    new Comic(40,"Oscar",1997,"../assets/humor/jordicule.jpeg",this,25,"tapa blanda","humor"),
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
        {                  
          div.innerHTML = this.contingut.toString();
          let imag = document.createElement("img");
          imag.src=this.contingut.imatge;
          imag.style.display="block";
          imag.style.height="370px";
          imag.style.paddingLeft="15%";
          div.appendChild(imag);          
        }
      }

      public mostrarAparador(ev:Event){
        let bt = this.getName(ev);
        this.NovetatsVisible=true;
        this.cercaVisible =false;        
        GestorMostres.mostraaleat = false;
        switch(bt)
        {
          case "btHumor":  
            //window.location.href='/tenda'; 
            this.NovetatsVisible = false;   
            this.cercaVisible = true;      
            this.titol = "Comics d'Humor";
            this.llistacerca = this.llistaComics.filter((comic) => comic.tema === "humor");
            break;
          case "btAventures":
            //window.location.href='/tenda';
            this.NovetatsVisible = false;
            this.cercaVisible = true;      
            this.titol = "Comics d'aventures";
            this.llistacerca = this.llistaComics.filter((comic) => comic.tema === "aventures");
            break;
          case "btAleat":
            GestorMostres.mostraaleat = true;   
            this.NovetatsVisible = false;         
            this.llistacerca = [];
            this.titol = "Mostra aleatòria";
            this.mostraAleatoria();
            this.cercaVisible = false;            
            break;
          case "btNovetats":
            this.NovetatsVisible = true;
            this.favoritsVisible = false;
        }                
      }

      mostrarNovetats(ev:Event)
      {
        this.titol = "Últimes novetats";
        this.NovetatsVisible = true;
        this.cercaVisible = false;
      }
      

      cercaAny(paraula:string):void{  
        this.cercaVisible = false;  
        this.llistacerca = [];    
        this.llistacerca = this.llistaComics.filter((comic) => comic.any.toString() === paraula);        
        if(this.llistacerca.length > 0)
        {
          this.NovetatsVisible = false;                  
          this.titol = "Resultat de la cerca";       
          GestorMostres.visible = true;
          GestorMostres.seleccionats = this.llistacerca;        
        }
        else
        {
          this.NovetatsVisible = true;                                   
          GestorMostres.visible = false;
          this.titol = "Últimes novetats";   
        }
      }

      getValue(event: Event): string {
        return (event.target as HTMLInputElement).value;
      }
      getName(event: Event): string {
        return (event.target as HTMLInputElement).name;
      }      

      btTancarOnClick(event:Event)
      {
        this.comicseleccionat = false;
        this.contingut.seleccionat = false;                        
      }

      btFavoritsOnClick(even:Event)
      {
        let comic = this.contingut as Comic;
        let ant = sessionStorage.getItem("Favorits");
        if(ant === null)
          ant = "";
        sessionStorage.setItem("Favorits" ,ant + ";"+comic.id.toString());
      }

      estaEnFavorits(comic:Comic)
      { 
        let favorits = (sessionStorage.getItem("Favorits"))?.split(';');
        return favorits?.includes(comic.id.toString());
      }

      mostraAleatoria()
      {
        //Trobar 10 nombres aleatoris no repetits
        let conta = 0;
        let nums:Number[] = [];
        while(conta < 10)
        {
          let aleat = Math.floor((Math.random() * (40-1) + 1));
          if((nums.find(x => x === aleat)) === undefined)
          {
            nums.push(aleat)
            conta++;
          }
        }
        //Omplir la llista amb els comics
        let sel:Comic[] = [];
        for(conta; conta >= 0;conta--)
        {
          let comic = this.llistaComics.find(x => x.id === nums[conta]);
          if(comic)          
            sel.push(comic);                  
        }
        GestorMostres.seleccionats = sel;
      }

      mostrarFavorits(event:Event)
      {
         MostraFavorits.visible = true;
         this.favoritsVisible = true;
         this.titol = "";
         let llistaindex = (sessionStorage.getItem("Favorits")?.split(';'));
         MostraFavorits.llistaFavorits = [];
         llistaindex?.forEach(i =>{
            let comic = this.llistaComics.find(c => c.id.toString() === i);
            if(comic !== undefined)
                MostraFavorits.llistaFavorits.push(comic);
         });
      }
    }//Fi de la classe

    