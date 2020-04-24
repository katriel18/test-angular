import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-countdown-parent',
  template: //la variables local es 'tiempo' que hace uso del hijo 'countdown-timer'
  `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="tiempo.start()">Start</button>
  <button (click)="tiempo.stop()">Stop</button>
  <div class="seconds">{{tiempo.seconds}}</div>
  <app-countdown-timer #tiempo></app-countdown-timer>
  `,
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
