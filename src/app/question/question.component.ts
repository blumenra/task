
import { Question } from '../Models/Question';
import { Option } from '../Models/Option';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { OkButtonState } from '../Models/OkButtonState';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges{

  @Output() public selectEvent = new EventEmitter<number>();
  @Output() public correctAnsEvent = new EventEmitter();
  
  @Input() public okButtonState:OkButtonState;
  @Input() public question:Question;
  @Input() public questionIdx:number;

  options:Option[];
  correctAnsIdx:number;
  selectedOptionIdx:number;

  constructor() { 
    
    this.selectedOptionIdx = -1;
  }

  shuffle(collenction:any[]){
    let j:number, x:Option, i:number;
    for (i = collenction.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = collenction[i];
        collenction[i] = collenction[j];
        collenction[j] = x;
    }
  }
  
  initOptions(){
    
    if(!this.question)
      return;
      
    let correctAns:Option = this.createOption(this.question.correct_answer);
    this.options = [];
    for(let i=0; i < this.question.incorrect_answers.length; i++){
      this.options.push(this.createOption(this.question.incorrect_answers[i]));
    }

    this.shuffle(this.options);
    let randomNum = Math.floor(Math.random() * (this.options.length + 1));
    this.options.splice(randomNum, 0, correctAns); // Add  correct ans at random position
    this.correctAnsIdx = randomNum;
  }
  
  createOption(answer:string): Option{
    
    return {
              answer:answer,
              clicked: false,
              classes:{
                option: true,
                defaultOption: true,
                clicked: false,
                correctAns: false,
                inCorrectAns: false
              }
            };
  }

  updateOptionSelected($event){
    this.selectedOptionIdx = $event;
    this.selectEvent.emit($event);
  }

  ngOnChanges(changes:SimpleChanges){
    
    if(changes.questionIdx){
      
      this.initOptions();
      return;
    }

    if(this.selectedOptionIdx < 0)
      return;
      
    if(this.okButtonState == OkButtonState.OK){ 
      this.options[this.selectedOptionIdx].classes["correctAns"] = false;
      this.options[this.selectedOptionIdx].classes["inCorrectAns"] = false;
    }
    else{

      if(this.selectedOptionIdx == this.correctAnsIdx){
        this.options[this.selectedOptionIdx].classes["correctAns"] = true;
        this.correctAnsEvent.emit();
      }
      else
        this.options[this.selectedOptionIdx].classes["inCorrectAns"] = true;
    }

    this.options[this.selectedOptionIdx].classes["clicked"] = false;

  }

  ngOnInit() {
  }

}
