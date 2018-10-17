import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>

    <!--Access class members and functions -->
    <h2> {{name}} </h2>
    <h4> {{getName()}}</h4>

    <!--Apply class changes -->
    <h4 [class] = 'successClass' > {{getName().length}}</h4>
    <h4 [class.text-danger] = 'hasError' > {{name}}</h4>
    <h4 class='text-success'> {{getName().toUpperCase()}}</h4>

    <h4 [ngClass]="messageClasses" > {{getName()}}  </h4>

    <!--Apply style changes -->
    <h4 [style.color] = "'pink'"> Highlight color 1</h4>
    <h4 [style.color] = "hilightColor ?  'red' : 'green'">Highligh color with conditional operator</h4> 
    <h4 [style.color] = "applyColor">  highlight color to apply from class prop</h4> 
    <h3 [ngStyle] = "styleCases"> Apply style through binding</h3>

    <!--Make use of elements attributes -->
    <input name='txt' [id]='myId' type='text' value='text box'/>
    <input name='txt' [disabled]='isDisabled' type='text' value='text box123ß'/>

    <!--Event handler-->
    <button (click) = "onClick($event)"> Greet</button>
    <button (click)="greetings= greetings + '  Changed the greeting message!'"> Greet</button>

    <div [class.text-danger] = 'hasError' > {{greetings}}  </div>

    <input #myInput type="text">
    <button (click) = "logMessage(myInput.value)">Log</button>
    <button (click) = "logMessage(myInput)">Log the element</button>


    <input [(ngModel)]="txtValue" type="text">
    {{txtValue}}

    <h2 *ngIf="true"> If condtion </h2>
    <h2 *ngIf="conditionValue"> Conditional Binding</h2>
    <h2 *ngIf="conditionValue; else elseBlock"> Conditonal Block with if else </h2>

    <ng-template #elseBlock>
     <h2> Conditional else Bock</h2> 
    </ng-template>

    <div *ngIf="conditionValue; then thenBlock; else ifElseBlock"> </div>
    <ng-template #thenBlock>
      <h3> IF BLOCK</h3>
    </ng-template>

    <ng-template #ifElseBlock>
      <h3> ELSE BLOCK </h3>
    </ng-template>

    <div [ngSwitch]='color'>
      <div *ngSwitchCase="'red'">Red Color</div>
      <div *ngSwitchCase="'blue'">Blue Color</div>
      <div *ngSwitchCase="'green'">Green Color</div>
      <div *ngSwitchDefault>No Color Picked</div>
    </div>

    <div  *ngFor="let color of allColors; index as i">
      {{i+1}}-{{color}}
    </div>

    <div  *ngFor="let color of allColors; first as f">
    {{f}}-{{color}}
    </div>

    <div  *ngFor="let color of allColors; last as l">
    {{l}}-{{color}}
    </div>

    <div  *ngFor="let color of allColors; even as e">
    {{e}}-{{color}}
    </div>

    <div  *ngFor="let color of allColors; odd as o">
    {{o}}-{{color}}
    </div>

  </div>
  `,
  styles: [`
  .text-success{
    color: green;
  }

  .text-danger{
    color: red;
  }

  .text-special{
    font-style: italic;
  }

  `]
})
export class TestComponent implements OnInit {

  public name = "Angular Test app!";
  public myId = "testId";
  public isDisabled = true;
  public isSpecial = false;
  public successClass = "text-success";
  public hasError = false;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special":this.isSpecial
  }

  public hilightColor = false;
  public applyColor = "gray";
  public styleCases = {
    color : "blue",
    fontStyle: "italic"
  }
  public greetings = "";
  public conditionValue = true;

  public color="blue";

  public allColors = [ "Red", "Pink", "Blue", "White", "Green"];

  constructor() { }

  ngOnInit() {
  }

  getName(){
    return "Name";
  }

  showMessage(){
    alert("Clicked");
  }

  onClick(event){
    console.log(event.type);
    console.log("Welcome to Click event handling");
    this.hasError = !this.hasError;
    this.greetings = "Event hadling";
  }

  logMessage(value){
    console.log(value);
  }

  logElement(element){
    console.log(element);
  }

}
