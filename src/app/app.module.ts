import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnswersComponent } from './answers/answers.component';
import { QuestionsBarComponent } from './questions-bar/questions-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    QuestionsBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
