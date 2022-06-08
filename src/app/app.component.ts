import { Component } from '@angular/core';
// interface is a structure for type checking. 
export interface PlayingCard{
  cardVal: string;
  suit: string;
}

//A. Decorator
@Component({
  selector: 'app-root', //C. Service
  template: `<h1>Hello world! {{title}}</h1> <br/>
  <ul *ngFor="let item of firstName; let i = index">
    <li>{{"Item"+i+":"+item}}</li>
</ul>
<!-- Show cards in unordered list. -->
<table>
<tr *ngFor="let card of cards">
<td> <ul> <li> {{card.cardVal}} </li> </ul> </td>
<td> <ul> <li> {{card.suit}} </li> </ul> </td>
</tr>
</table>`
              
  
})
export class AppComponent {
  title = 'This is Angular!';
  // Include card data in collection.
cards:PlayingCard[] = [
  { cardVal: "Ace", suit: "Spades" },
  { cardVal: "Two", suit: "Clubs" },
  { cardVal: "Six", suit: "Hearts"} ]

    //keep track index
    firstName = ['abe', 'amy', 'al'];
  }