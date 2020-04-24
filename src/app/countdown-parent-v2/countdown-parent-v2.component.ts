import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent }  from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-v2',
  template: 
  `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['./countdown-parent-v2.component.css']
})
export class CountdownParentV2Component implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
   // Redefinir `segundos ()` para obtener de `CountdownTimerComponent.seconds` ...
    // pero espere una marca primero para evitar devMode de una sola vez
    // error de violación de flujo de datos unidireccional
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
