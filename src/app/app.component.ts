import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isMouseOverOkButton:boolean = false;

  constructor(){
    
  }

  onMouseHover(event){
    this.flipOkButtonClasses();
  }

  onMouseOut(event){
    this.flipOkButtonClasses();
  }

  flipOkButtonClasses(){
    this.isMouseOverOkButton = !this.isMouseOverOkButton;
  }
}
