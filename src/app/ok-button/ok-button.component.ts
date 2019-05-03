import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { OkButtonState } from '../Models/OkButtonState';

@Component({
  selector: 'app-ok-button',
  templateUrl: './ok-button.component.html',
  styleUrls: ['./ok-button.component.css']
})

export class OkButtonComponent implements OnInit,OnChanges {
  
  @Output() public onClick = new EventEmitter<OkButtonState>();
  @Input() public selected:number;

  classes = {};

  OK_TEXT:string = "OK";
  CONTINUE_TEXT:string = "CONTINUE";
  okbuttonText:string;
  state:OkButtonState;
  okbuttonIsClicked:boolean;

  constructor() { 
    
    this.state = OkButtonState.OK;
    this.classes = {
      optionSelected: false,
      regular: true
    }
    this.okbuttonText = this.OK_TEXT;
    this.okbuttonIsClicked = false;
  }
  
  onClickOkButton(event){
    
    if(this.selected < 0)
      return;

    this.onClick.emit(this.state);
    (this.state == OkButtonState.CONTINUE) ? this.setButtonToOk() : this.setButtonToContinue();
  }

  setButtonToOk(){
    this.classes['optionSelected'] = false;
    this.okbuttonText = this.OK_TEXT;
    this.state = OkButtonState.OK;
  }

  setButtonToContinue(){
    this.okbuttonText = this.CONTINUE_TEXT;
    this.state = OkButtonState.CONTINUE
  }

  ngOnChanges(){

    this.classes['optionSelected'] = (0 <= this.selected);
  }

  ngOnInit() {
  }

}
