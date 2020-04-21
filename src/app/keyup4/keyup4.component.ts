import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup4',
  template:
   `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `,
  styleUrls: ['./keyup4.component.css']
})
export class Keyup4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = '';
  update(value: string) { this.value = value; }

}
