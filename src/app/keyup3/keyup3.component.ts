import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup3',
  template: 
  `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `,
  styleUrls: ['./keyup3.component.css']
})
export class Keyup3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value = '';
  onEnter(value: string) { this.value = value; }
}
