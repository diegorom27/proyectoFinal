import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-accordion',
  templateUrl: './mini-accordion.component.html',
  styleUrls: ['./mini-accordion.component.css']
})
export class MiniAccordionComponent implements OnInit {
   
   @Input() posicion: string="";
   @Input() lugar: string ="";
   @Input() cargo: string ="";
   @Input() periodo: string ="";

  constructor() {
    this.posicion;
    this.lugar;
    this.cargo;
    this.periodo;
   }

  ngOnInit(): void {
  }

}
