import { Component, OnInit } from '@angular/core';
import { Question } from './Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

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

  ngOnInit() {
  }

}
