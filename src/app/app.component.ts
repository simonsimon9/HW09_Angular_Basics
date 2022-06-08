import { Component } from '@angular/core';
// interface is a structure for type checking. 
export interface PlayingCard{
  cardVal: string;
  suit: string;
}

//A. Decorator
@Component({
  selector: 'app-root', //C. Service
  template: `
  <section>
  <form #myForm="ngForm">
  Name:
  <input type="text" pattern="[a-zA-Z ]*" minlength="3" required
  [(ngModel)]="myName" name="firstName" #firstName="ngModel" >
  <div [hidden]="firstName.valid || firstName.pristine">
  This control is invalid.</div>
  <p *ngIf="firstName?.errors?.['required']">This field is required.</p>
  <p *ngIf="firstName?.errors?.['pattern']">
  Only alphabetical characters are allowed.</p>
  <p *ngIf="firstName?.errors?.['minlength']">
  This entry must have at least three characters.</p>
  <button type="submit" class="btn btn-default"
  [disabled]="!myForm.form.valid" (click)="onSubmit()">Submit</button>
 
 
  LastName:
  <input type="text" pattern="[a-zA-Z ]*" minlength="2" required
  [(ngModel)]="myLastName" name="LastName" #LastName="ngModel" >
  <div [hidden]="LastName.valid || LastName.pristine">
  This control is invalid.</div>
  <p *ngIf="LastName?.errors?.['required']">This field is required.</p>
  <p *ngIf="LastName?.errors?.['pattern']">
  Only alphabetical characters are allowed.</p>
  <p *ngIf="LastName?.errors?.['minlength']">
  This entry must have at least three characters.</p>
  <button type="submit" class="btn btn-default"
  [disabled]="!myForm.form.valid" (click)="onSubmit()">Submit</button>

</form>
</section>
`
})
export class AppComponent {
  myName: string;
  myLastName: string;
  constructor() {
     this.myName = "frank";
    this.myLastName="";
  }
  onSubmit() {
    alert(this.myName);
  }
}