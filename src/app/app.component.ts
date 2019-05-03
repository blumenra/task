import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { QuestionsService } from './Services/questions.service';
import { Question } from './Models/Question';
import { OkButtonState } from './Models/OkButtonState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  selected:number;

  okButtonState:OkButtonState;
  questions:Question[];
  currentQuestion:Question;
  currentQuestionIdx:number;
  numOfQuestions:number;

  numOfCorrectAnswers:number;

  constructor(private qService: QuestionsService){
    this.numOfCorrectAnswers = 0;
    this.selected = -1;
    this.okButtonState = OkButtonState.OK;
  }
  
  ngOnInit(){
    this.qService.importQuestions().subscribe(
      api => {
          this.questions = api['results'];
          this.currentQuestionIdx = 0;
          this.currentQuestion = this.questions[this.currentQuestionIdx];
          this.numOfQuestions = this.questions.length;
        }
    );
  }

  onClickOkButton($event){
    
    if(this.selected < 0)
      return;

    if($event == OkButtonState.CONTINUE){

      this.okButtonState = OkButtonState.OK;
      this.currentQuestion = this.questions[++this.currentQuestionIdx];
      this.selected = -1;
      return;
    }

    this.okButtonState = OkButtonState.CONTINUE;
  }

  onCorrectAnswer(){
    this.numOfCorrectAnswers++;
  }

  updateOptionSelected($event){
    this.selected = $event;
  }

}
