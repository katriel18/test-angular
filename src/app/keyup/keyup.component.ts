import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: 
  `

  <input (keyup)="onKey($event)">
  <p>{{values0}}</p>
  <p>{{values}}</p>

  `,
 styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  values0='';
  values = '';


  onKey(event: any) { // without type info
    
    this.values0 += event.key + ' | ';

    this.values += event.target.value + ' | ';
  }

/*
  onKey(event: KeyboardEvent) { // with type info
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }
*/
  
}