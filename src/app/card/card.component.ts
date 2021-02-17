import { Component, OnInit, Input } from '@angular/core';

declare var funcionAnimacion:any; //funcion para js

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  

  @Input()name:string="";
  @Input()sexo:string="";
  @Input()direccion:string="";
  @Input()telefono:string="";
  @Input()correo:string="";

  constructor() {
    this.name;
    this.sexo;
    this.direccion;
    this.telefono;
    this.correo;
  }
  onClick(){
    funcionAnimacion();
  }
  ngOnInit(): void {

  }
}
