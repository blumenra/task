import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-bar',
  templateUrl: './questions-bar.component.html',
  styleUrls: ['./questions-bar.component.css']
})
export class QuestionsBarComponent implements OnInit {

  numOfAuestions:number;
  circles:any[] = [];
  constructor() {
    this.numOfAuestions = 15;
    for(let i=0; i < this.numOfAuestions; i++)
      this.circles.push(0);

    console.log(this.circles);
  }

  ngOnInit() {
  }

}
