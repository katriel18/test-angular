import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-controls',
  template: 
  `
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button >Activate</button>
  `,
  styleUrls: ['./hero-controls.component.css']
})
export class HeroControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
