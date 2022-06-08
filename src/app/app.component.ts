import { Component } from '@angular/core';
// interface is a structure for type checking. 
export interface PlayingCard{
  cardVal: string;
  suit: string;
}

//A. Decorator
@Component({
  selector: 'app-root', //C. Service
  template: `<input [(ngModel)]="myinput">
  <input type='button' (click)=doSomething(myinput) >
  {{myoutput}}
  {{myinput}} <br/>
  
  <input [(ngModel)]="myinput1">
<input type='button' (click)=doSomething1(myinput1)>
{{myoutput1}}`
  
})
export class AppComponent {
  myinput = '';
  myinput1 = '';
  myoutput = '';
  myoutput1='';
  doSomething(someContent : any) {
    alert(someContent);
    this.myoutput = someContent;
  }

  doSomething1(someContent: any){
    alert(someContent);
    this.myoutput1 = someContent;
  }
  }