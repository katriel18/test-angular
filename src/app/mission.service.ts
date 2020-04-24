import { Injectable } from '@angular/core';

import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }
   // Fuentes de cadena observables
   private missionAnnouncedSource = new Subject<string>();
   private missionConfirmedSource = new Subject<string>();
 
   // Secuencias de cadena observables
   missionAnnounced$ = this.missionAnnouncedSource.asObservable();
   missionConfirmed$ = this.missionConfirmedSource.asObservable();
 
   // Comandos de mensajes de servicio
   announceMission(mission: string) {
     this.missionAnnouncedSource.next(mission);
   }
 
   confirmMission(astronaut: string) {
     this.missionConfirmedSource.next(astronaut);
   }

}
