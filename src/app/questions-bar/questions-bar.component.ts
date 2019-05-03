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

  constructor() {
    this.numOfQuestions = -1;
    this.classes = {
      wrapper: false,
      trunOn: true
    }
  }

  ngOnChanges(chages:SimpleChanges){
  
    if(chages.answeredCount)
      this.answeredCount++;

    if(this.numOfQuestions >= 0)  {
      this.initBar();
    }
  }
    
  initBar(){
    
    this.circles = Array(this.numOfQuestions);
  }

  ngOnInit() {
  }

}
