
import { Question } from '../Models/Question';
import { Option } from '../Models/Option';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges{

  @Output() public selectEvent = new EventEmitter<number>();
  @Input() public okbuttonIsClicked:boolean;

  question:Question;
  options:Option[];
  correctAnsIdx:number;
  selectedOptionIdx:number;
  index:number;

  constructor() { 
    
    this.index = 1;
    this.selectedOptionIdx = -1;
    this.question = {
      category: "Mythology",
      type: "multiple",
      difficulty: "easy",
      question:"Who was the only god from Greece who did not get a name change in Rome?",
      correct_answer:"Apollo",
      incorrect_answers:[
        "Demeter",
        "Zeus",
        "Athena"
      ]
    }

    this.initOptions();
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

  ngOnChanges(){
    
    if(!this.okbuttonIsClicked){ 
      this.options[this.selectedOptionIdx].classes["correctAns"] = false;
      this.options[this.selectedOptionIdx].classes["inCorrectAns"] = false;
    }
    else{

      if(this.selectedOptionIdx == this.correctAnsIdx)
        this.options[this.selectedOptionIdx].classes["correctAns"] = true;
      else
        this.options[this.selectedOptionIdx].classes["inCorrectAns"] = true;
    }

    this.options[this.selectedOptionIdx].classes["clicked"] = false;

  }

  ngOnInit() {
  }

}
