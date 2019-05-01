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

  constructor(){
    this.selectedClass = {
      optionSelected: this.selected,
      regular: true
    }
    this.mouseOver = false;
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
