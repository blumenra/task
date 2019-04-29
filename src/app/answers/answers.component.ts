import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  answers:string[] = [];
  constructor() { 
    this.answers.push("Demeter", "Zeus", "Athena", "Apollo");
    

    this.shuffle();
  }

  shuffle(){
      let j, x, i;
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
