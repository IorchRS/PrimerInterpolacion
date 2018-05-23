import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickethoy',
  templateUrl: './tickethoy.component.html',
  styleUrls: ['./tickethoy.component.scss']
})
export class TickethoyComponent implements OnInit {
  cantidad : number = 0;
  precio : number = 4;
  nombreArticulo: string = 'cereal';
  masArticulos: string = ''; 


  constructor() { }

  ngOnInit() {
  }

}
