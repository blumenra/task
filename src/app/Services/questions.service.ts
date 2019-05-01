import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionsService {

  DBUrl:string;

  constructor(private http:HttpClient) { 

    this.DBUrl = 'assets/api.json';
  }

  data:any;

  public importQuestions(){
    console.log("Service!!");
    
    this.http.get(this.DBUrl).subscribe(
      questions => console.log(questions)
    );


    return 666;
  }
}
