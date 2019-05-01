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
  isMouseOverOkButton:boolean = false;
  selected:boolean = false;
  selectedClass = {};
  mouseOver:boolean;
  questions:Question[];

  constructor(private qService: QuestionsService){
    
    this.selectedClass = {
        optionSelected: this.selected,
        regular: true
    }
    this.mouseOver = false;
  }
  
  ngOnInit(){
    this.qService.importQuestions().subscribe(
        api => {
                  this.questions = api['results'];
                  console.log(this.questions);
                }
    );
  }
  
  onMouseOver(event){
    if(this.selected)
      this.mouseOver = true;
  }

  onMouseLeave(event){
      this.mouseOver = false;
  }

  updateOptionSelected($event){
    this.selected = $event;
    this.selectedClass['optionSelected'] = $event;
  }

}
