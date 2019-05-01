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

  constructor(){
    this.selectedClass = {
      optionSelected: this.selected,
      regular: true
    }
  }

  updateOptionSelected($event){
    this.selected = $event;
    this.selectedClass['optionSelected'] = $event;
  }

}
