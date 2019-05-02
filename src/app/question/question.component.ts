
import { Question } from '../Models/Question';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Output() public selectEvent = new EventEmitter<boolean>();
  
  question:Question;
  index:number;

  constructor() { 
    
    this.index = 1;
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
  }

  updateOptionSelected($event){
    this.selectEvent.emit($event);
  }

  ngOnInit() {
  }

}
