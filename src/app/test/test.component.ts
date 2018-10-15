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

  constructor() { }

  ngOnInit() {
  }

  getName(){
    return "Name";
  }

  showMessage(){
    alert("Clicked");
  }


}
