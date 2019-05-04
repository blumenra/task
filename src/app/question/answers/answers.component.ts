import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Option } from '../../Models/Option'
import { OkButtonState } from '../../Models/OkButtonState';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit, OnChanges {

  @Output() public selectEvent = new EventEmitter<number>();
  @Input() public okButtonState:OkButtonState;
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
    
    // If the question was answered and waiting to the user to move to the next question
    if(this.okButtonState == OkButtonState.CONTINUE)
      return;
    
    // Handle the case when the click is to cancel a selection
    if(this.isCancelSelectionClick(event)){
      this.handleSelectionCancelClick(event);
      return;
    }

    // If another option is already selected
    if(this.isOptionClicked()){
      this.options[this.currClickedOption]['clicked'] = false;
      this.options[event.currentTarget.id]['clicked'] = true;
      this.turnClickedClassOff(this.currClickedOption);
    }
    
    this.currClickedOption = event.currentTarget.id;
    this.eventSign = this.SELECT_SIGN;
    
    this.selectEvent.emit(this.currClickedOption);
    
    this.disableHoverEffectOnUnselectedOptions();
    this.turnClickedClassOn(event.currentTarget.id);
  }

  handleSelectionCancelClick(event) {
    this.currClickedOption = -1;
    this.options[event.currentTarget.id]['clicked'] = false;
    this.options[event.currentTarget.id]['classes']['clicked'] = false;
    this.turnClickedClassOff(event.currentTarget.id);
    this.eventSign = this.HOVER_SIGN;
    this.selectEvent.emit(this.currClickedOption);
    this.enbleHoverEffectOnUnselectedOptions();
  }

  isCancelSelectionClick(event){
    return this.currClickedOption == event.currentTarget.id;
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

    if(this.okButtonState == OkButtonState.OK)
      return;

    this.eventSign = this.HOVER_SIGN;
  }

  ngOnInit() {
  }

}
