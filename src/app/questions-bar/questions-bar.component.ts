import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-questions-bar',
  templateUrl: './questions-bar.component.html',
  styleUrls: ['./questions-bar.component.css']
})
export class QuestionsBarComponent implements OnInit, OnChanges {

  @Input() public numOfQuestions:number;
  @Input() public answeredCount:number;

  circles:any[];
  count:number;
  classes = {};
  initialized:boolean;

  constructor() {
    this.initialized = false;
    this.numOfQuestions = -1;
    this.classes = {
      wrapper: false,
      trunOn: true
    }
  }

  ngOnChanges(chages:SimpleChanges){
  
    if(!this.initialized && this.numOfQuestions >= 0)  {
      this.initBar();
      this.initialized = true;
    }
  }
    
  initBar(){
    
    this.circles = Array(this.numOfQuestions);
  }

  ngOnInit() {
  }

}
