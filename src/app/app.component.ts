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
  selected:boolean = false;
  selectedClass = {};

  OK_TEXT:string = "OK";
  CONTINUE_TEXT:string = "CONTINUE";
  okbuttonText:string;

  questions:Question[];

  constructor(private qService: QuestionsService){
    
    this.selectedClass = {
        optionSelected: this.selected,
        regular: true
    }
    this.okbuttonText = this.OK_TEXT;
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
    
    if(!this.selected)
      return;
    
    this.okbuttonText = this.CONTINUE_TEXT;
  }

  updateOptionSelected($event){
    this.selected = $event;
    this.selectedClass['optionSelected'] = $event;
  }

}
