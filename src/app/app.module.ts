import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnswersComponent } from './question/answers/answers.component';
import { QuestionsBarComponent } from './questions-bar/questions-bar.component';
import { QuestionComponent } from './question/question.component';

import { QuestionsService } from './Services/questions.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    QuestionsBarComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    QuestionsService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
