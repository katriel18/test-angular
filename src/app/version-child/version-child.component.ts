import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template:
   `
  <h3>Version {{major}}.{{minor}}</h3>
  <h4>Change log:</h4>
  <ul>
    <li *ngFor="let change of changeLog">{{change}}</li>
  </ul>
`,
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements/* OnInit ,*/OnChanges  {

  constructor() { }

  ngOnInit(): void {

    
  }


  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];//arreglo donde se almacena todos los mensajes

  //SimpleChange ,clase con una tabla hash que representa un cambio fundamental desde un previo al nuevo valor
//propKey: string  , cambiamos la llave del arreglo de entero a String y seria 
//los mobres de propiedades del padre []
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    console.log('tabla hash: ',changes);//muestra la tabla hash final

    let log: string[] = [];

    for (let propName in changes) {

    console.log('changes in :',propName);//muestra las keys que cambian
    //propName=mayor
    //propName=minor

      let changedProp = changes[propName];
      //changedProp=[previousValue: undefined, currentValue: 1, firstChange: true]
      //changedProp=[ previousValue: undefined, currentValue: 23, firstChange: true]
      let to = JSON.stringify(changedProp.currentValue);

      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);  
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  } 
}
