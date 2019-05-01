import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { hostViewClassName } from '@angular/compiler';
import { Option } from '../Models/Option'

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Output() public selectEvent = new EventEmitter<boolean>();

  currHoveredOption:number;
  currClickedOption:number;
  answers:string[] = [];
  eventSign:string;
  HOVER_SIGN:string = "Hover";
  SELECT_SIGN:string = "Select";
  options:Option[] = [];

  constructor() { 

    this.answers.push("Demeter", "Zeus", "Athena", "Apollo");
    this.initOptions();
    this.currHoveredOption = -1;
    this.currClickedOption = -1;
    this.eventSign = this.HOVER_SIGN;
    
    this.shuffle();
  }
  
  initOptions(){
    for(let i=0; i < this.answers.length; i++){

      this.options.push({
        hideEventSign: true,
        clicked: false,
        classes:{
          normal: true,
          clicked: false    
        }
      });
    }
  }

  onMouseOver(event){

    if(this.isOptionClicked())
      return;

    this.currHoveredOption = event.srcElement.id;
    this.options[this.currHoveredOption]['hideEventSign'] = false;
    console.log(event.srcElement.id);
  }

  isOptionClicked(){
    return (0 <= this.currClickedOption && this.currClickedOption < this.answers.length);
  }

  onMouseLeave(event){
    
    if(this.isOptionClicked())
      return;

    this.options[this.currHoveredOption]['hideEventSign'] = true;
    this.currHoveredOption = -1;
  }

  onMouseClick(event){
    
    if(this.currClickedOption == event.srcElement.id){
      this.currClickedOption = -1;
      this.options[event.srcElement.id]['clicked'] = false;
      this.options[event.srcElement.id]['classes']['clicked'] = false;
      this.eventSign = this.HOVER_SIGN;
      this.selectEvent.emit(false);
      return;
    }

    if(this.isOptionClicked()){
      this.options[this.currClickedOption]['hideEventSign'] = true;
      this.options[event.srcElement.id]['hideEventSign'] = false;
      this.options[this.currClickedOption]['clicked'] = false;
      this.options[event.srcElement.id]['clicked'] = true;
      this.options[this.currClickedOption]['classes']['clicked'] = false;
    }
    
    this.options[event.srcElement.id]['classes']['clicked'] = true;

    this.currClickedOption = event.srcElement.id;
    this.eventSign = this.SELECT_SIGN;
    
    this.selectEvent.emit(true);
    
    console.log(event.srcElement.id);
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
