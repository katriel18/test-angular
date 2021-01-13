import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star1',
  templateUrl: './star1.component.html',
  styleUrls: ['./star1.component.css']
})
export class Star1Component implements OnInit {

  products: number[] = [1, 2, 3];
  valorations: string[] = ['', '', ''];

  valor:number=2;
  constructor() { }

  ngOnInit(): void {
  }

  enviar(product: number, valoration: number) {
    this.valorations[product] = valoration + ' estrellas';
    console.log(this.valorations);
  }

}
