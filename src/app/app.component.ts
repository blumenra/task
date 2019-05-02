import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selected:boolean = false;
  selectedClass = {};

  OK_TEXT:string = "OK";
  CONTINUE_TEXT:string = "CONTINUE";
  okbuttonText:string;

  constructor(){
    this.selectedClass = {
      optionSelected: this.selected,
      regular: true
    }
    this.okbuttonText = this.OK_TEXT;
  }

  onClickOkButton(event){
    
    if(!this.selected)
      return;
    
    this.okbuttonText = this.CONTINUE_TEXT;
  }

  updateOptionSelected($event){
    this.selected = $event;
    this.selectedClass['optionSelected'] = $event;
  }

}
