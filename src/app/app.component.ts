import { Component } from '@angular/core';

export interface PlayingCard{
  cardVal: string;
  suit: string;
}

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
              {{card1.cardVal}} of {{card1.suit}}</h1>`,
  styleUrls: ['./app.component.css']
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