import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isMouseOverOkButton:boolean = false;
  selected:boolean = false;
  selectedClass = {};
  mouseOver:boolean;

  OK_TEXT:string = "OK";
  CONTINUE_TEXT:string = "CONTINUE";
  okbuttonText:string;

  constructor(){
    this.selectedClass = {
      optionSelected: this.selected,
      regular: true
    }
    this.mouseOver = false;
    this.okbuttonText = this.OK_TEXT;
  }

  onClickOkButton(event){
    
    if(!this.selected)
      return;
    
    this.okbuttonText = this.CONTINUE_TEXT;
  }

  onMouseOver(event){
    if(this.selected)
      this.mouseOver = true;
  }

  onMouseLeave(event){
      this.mouseOver = false;
  }

  updateOptionSelected($event){
    this.selected = $event;
    this.selectedClass['optionSelected'] = $event;
  }

}
