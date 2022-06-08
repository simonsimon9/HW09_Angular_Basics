import { Component } from '@angular/core';
// interface is a structure for type checking. 
export interface PlayingCard{
  cardVal: string;
  suit: string;
}

//Class is an object factory - adds extra js
export class PlayingDud{
  cardVal: string;
  suit: string;

  constructor(cardval: string, suit: string){
    this.cardVal =  cardval;
    this.suit = suit;
  }

  public get _suit(){
    return this.suit;
  }

  public set _suit(suit:string){
    this.suit = suit;
  }

  public get _cardVal(){
    return this.cardVal;
  }

  public set _cardVal(cardVal:string){
    this.cardVal = cardVal;
  }
  
}

//A. Decorator
@Component({
  selector: 'app-root', //C. Service
  template: `<h1>Hello world! {{title}} <br/>
              {{card.cardVal}} of {{card.suit}} <br/>
              {{card1.cardVal}} of {{card1.suit}}</h1><br/>
              Card: <input [(ngModel)]="card.cardVal">
              Suit: <input [(ngModel)]="card.suit">
              `,
  
})
export class AppComponent {
  title = 'This is Angular!';
  // Declare and initialize a PlayingCard object.
  constructor(){
  }
  // Declare a PlayingCard object.
  card: PlayingCard = {
    cardVal: "Ace",
    suit: "Spades"
    };
  
  card1 : PlayingDud = new PlayingDud("Queen", "Diamonds");
  
  }