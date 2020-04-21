import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template:
   `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `,
  styleUrls: ['./loop-back.component.css']
})
export class LoopBackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
