import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  template: 
  `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-vote *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)">
    </app-vote>
  `,
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
