import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../Models/Api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionsService {

  DBUrl:string;

  constructor(private http:HttpClient) { 

    // this.DBUrl = 'assets/api.1.json';
    this.DBUrl = 'assets/api.json';
  }

  data:any;

  public importQuestions(): Observable<Api>{

    
    return this.http.get<Api>(this.DBUrl);
  }
}
