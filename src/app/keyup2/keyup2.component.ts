import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup2',
  template: 
  `

  <input #box (keyup)="onKey(box.value)">
  <p>{{values0}}</p>
  <p>{{values}}</p>

 `,
  styleUrls: ['./keyup2.component.css']
})
export class Keyup2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  values0 = '';
  values = '';
  onKey(value: string) {
    this.values0= value;
    this.values += value + ' | ';
  }

}
