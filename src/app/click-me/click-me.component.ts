import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  //templateUrl: './click-me.component.html',
  template: `
 <button (click)="onClickMe()">Click me!</button>
 {{clickMessage}}`,

  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';

  }

}