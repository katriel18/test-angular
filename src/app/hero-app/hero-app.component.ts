import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-app',
  template:
   `
  <h1>Tour of Heroes</h1>
 
`,
styleUrls: ['./hero-app.component.css']
})
export class HeroAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
