import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  template: 
   `
  <h4>{{name}}</h4>
  <button (click)="vote(true)"  [disabled]="didVote">Agree</button>
  <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
`,
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();//se crea un evento
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);//lanza el evento al padre
    this.didVote = true;
  }
}
