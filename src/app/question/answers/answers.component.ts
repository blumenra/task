import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Option } from '../../Models/Option'

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit, OnChanges {

  @Output() public selectEvent = new EventEmitter<number>();
  @Input() public okbuttonIsClicked:boolean;
  @Input() public options:Option[];

  currClickedOption:number;

  eventSign:string;
  HOVER_SIGN:string = "Hover";
  SELECT_SIGN:string = "Select";

  constructor() { 

    this.currClickedOption = -1;
    this.eventSign = this.HOVER_SIGN;
  }

  isOptionClicked(){
    return (0 <= this.currClickedOption && this.currClickedOption < this.options.length);
  }

  onMouseClick(event){
    
    if(this.currClickedOption == event.srcElement.id){
      this.currClickedOption = -1;
      this.options[event.srcElement.id]['clicked'] = false;
      this.options[event.srcElement.id]['classes']['clicked'] = false;
      this.turnClickedClassOff(event.srcElement.id);
      this.eventSign = this.HOVER_SIGN;
      this.selectEvent.emit(this.currClickedOption);
      this.enbleHoverEffectOnUnselectedOptions();

      return;
    }

    if(this.isOptionClicked()){
      this.options[this.currClickedOption]['clicked'] = false;
      this.options[event.srcElement.id]['clicked'] = true;
      this.turnClickedClassOff(this.currClickedOption);
    }
    
    this.currClickedOption = event.srcElement.id;
    this.eventSign = this.SELECT_SIGN;
    
    this.selectEvent.emit(this.currClickedOption);
    
    this.disableHoverEffectOnUnselectedOptions();
    this.turnClickedClassOn(event.srcElement.id);
    
    console.log(event.srcElement.id);
  }

  turnClickedClassOff(id:number){
    this.options[id]['classes']['clicked'] = false;
    this.options[id]['classes']['defaultOption'] = true;
  }

  turnClickedClassOn(id:number){
    this.options[id]['classes']['clicked'] = true;
    this.options[id]['classes']['defaultOption'] = false;
  }

  disableHoverEffectOnOption(id){
    this.options[id]['classes']['clicked'] = false;
    this.options[id]['classes']['defaultOption'] = false;
  }

  disableHoverEffectOnUnselectedOptions(){
    for(let i=0; i < this.options.length; i++){
      if(i != this.currClickedOption)
        this.disableHoverEffectOnOption(i);
    }
  }

  enbleHoverEffectOnOption(id){
    this.turnClickedClassOff(id);
  }

  enbleHoverEffectOnUnselectedOptions(){
    for(let i=0; i < this.options.length; i++){
        this.enbleHoverEffectOnOption(i);
    }
  }

  ngOnChanges(){

    if(!this.okbuttonIsClicked)
      return;

  }

  ngOnInit() {
  }

}
