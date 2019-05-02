import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './Services/questions.service';
import { Question } from './Models/Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  selected:number;
  selectedClass = {};

  OK_TEXT:string = "OK";
  CONTINUE_TEXT:string = "CONTINUE";
  okbuttonText:string;
  okbuttonIsClicked:boolean;
  questions:Question[];

  constructor(private qService: QuestionsService){
    
    this.selectedClass = {
        optionSelected: this.selected,
        regular: true
    }
    this.okbuttonText = this.OK_TEXT;
    this.okbuttonIsClicked = false;
    this.selected = -1;
  }
  
  ngOnInit(){
    this.qService.importQuestions().subscribe(
        api => {
                  this.questions = api['results'];
                  console.log(this.questions);
                }
    );
  }

  onClickOkButton(event){
    
    if(this.selected < 0)
      return;

    if(this.okbuttonIsClicked){

      this.selectedClass['optionSelected'] = false;
      this.okbuttonText = this.OK_TEXT;
      this.okbuttonIsClicked = false;
      this.selected = -1;

      return;
    }

    this.okbuttonText = this.CONTINUE_TEXT;
    this.okbuttonIsClicked = true;
  }

  updateOptionSelected($event){
    this.selected = $event;
    this.selectedClass['optionSelected'] = (0 <= $event);
  }

}
