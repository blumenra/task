import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  options:boolean[] = [];
  currHoveredOption:number;
  answers:string[] = [];
  isMouseOver:boolean = false;

  constructor() { 

    this.answers.push("Demeter", "Zeus", "Athena", "Apollo");
    this.initOptions();
    this.currHoveredOption = -1;

    this.shuffle();
  }

  initOptions(){
    for(let i=0; i < this.answers.length; i++)
      this.options.push(false);
  }
  
  onMouseOver(event){
    this.currHoveredOption = event.srcElement.id;
    this.options[this.currHoveredOption] = !this.options[this.currHoveredOption];
  }

  onMouseOut(event){
    
    this.options[this.currHoveredOption] = !this.options[this.currHoveredOption];
    this.currHoveredOption = -1;
  }

  flipMouseOverVal(){
    this.isMouseOver = !this.isMouseOver;
  }

  shuffle(){
      let j:number, x:string, i:number;
      for (i = this.answers.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = this.answers[i];
          this.answers[i] = this.answers[j];
          this.answers[j] = x;
      }
  }

  ngOnInit() {
  }

}
