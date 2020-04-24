import { Component, OnInit , Input, OnDestroy} from '@angular/core';

import { MissionService } from '../mission.service';
import { Subscription }   from 'rxjs';


@Component({
  selector: 'app-astronaut',
  template: 
  `
  <p>
    {{astronaut}}: <strong>{{mission}}</strong>
    <button
      (click)="confirm()"
      [disabled]="!announced || confirmed">
      Confirm
    </button>
  </p>
`,
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit , OnDestroy  {

 

  ngOnInit(): void {
  }

  @Input() astronaut: string;
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    //evitar la pérdida de memoria cuando se destruye un componente
    this.subscription.unsubscribe();
  }
}
