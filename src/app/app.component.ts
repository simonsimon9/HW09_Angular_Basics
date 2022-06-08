import { Component } from '@angular/core';
// interface is a structure for type checking. 
export interface PlayingCard{
  cardVal: string;
  suit: string;
}

//A. Decorator
@Component({
  selector: 'app-root', //C. Service
  template: `<h1>Hello world! {{title}} <br/>
  <!-- Show cards in unordered list. -->
  <ul><li *ngFor="let card of cards" (click)="onSelect(card)">
  {{card.cardVal}}</li>
  </ul>
  <div *ngIf="selectedCard">
  <h2>{{selectedCard.cardVal}} **</h2>
  <input [(ngModel)]="selectedCard.cardVal" placeholder="name"/>
  </div>
  `
  
})
export class AppComponent {
  title = 'This is Angular!';
  // Include card data in class.
  cards:PlayingCard[] = [
  { cardVal:"Ace", suit:"Spades"},
  { cardVal:"Two", suit:"Clubs" },
  { cardVal:"Six", suit:"Hearts"},
  ];
  selectedCard!: PlayingCard;
  onSelect(card: PlayingCard) {
     alert(card.suit);
     this.selectedCard = card;
  }
  }