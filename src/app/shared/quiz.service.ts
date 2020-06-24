import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Candidate } from '../model/candidate';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  candidate: Candidate;
  correctAnswerCount: number = 0;
  username=localStorage.getItem('username');

  constructor(private http : HttpClient) { }
  getQuestions(){
    return this.http.get(environment.baseUrl+'quiz/questions');
  }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }


  submitScore(candidate: Candidate) {
  // this.candidate.quiz_mark=this.correctAnswerCount;
   console.log("answer count"+" "+this.correctAnswerCount);
   console.log("update score");

   // body.Score = this.correctAnswerCount;
   // body.TimeSpent = this.seconds;
    return this.http.put(environment.baseUrl + "quiz/updatescore", candidate,{responseType: 'text' as 'json'});
  }

  addqn(que: Question) {
    return this.http.post(environment.baseUrl+"quiz/addquestion",que,{responseType: 'text' as 'json'})
  }

  
}
