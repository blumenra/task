import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Circle } from '../Models/Circle';

@Component({
  selector: 'app-questions-bar',
  templateUrl: './questions-bar.component.html',
  styleUrls: ['./questions-bar.component.css']
})
export class QuestionsBarComponent implements OnInit, OnChanges {

  @Input() public numOfQuestions:number;
  @Input() public answeredCount:number;

  circles:Circle[];
  initialized:boolean;

  constructor() {
    this.initialized = false;
    this.numOfQuestions = -1;
  }

  ngOnChanges(chages:SimpleChanges){
  
    if(!this.initialized && this.numOfQuestions >= 0)  {
      this.initBar();
      this.initialized = true;
    }
    
    if(this.answeredCount == this.numOfQuestions)
      return;

    if(this.initialized && chages.answeredCount){
      this.circles[this.answeredCount].classes['turnOn'] = true;
    }
  }
    
  initBar(){
    
    this.circles = Array<Circle>(this.numOfQuestions);
    for(let i=0; i < this.circles.length; i++){
      this.circles[i] = { classes: {default: true, trunOn: false}};
    }
  }

  ngOnInit() {
  }

}
