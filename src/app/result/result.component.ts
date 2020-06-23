import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
import { SharedService } from '../shared/shared.service';
import { Candidate } from '../model/candidate';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
  candidate= new Candidate(0,"","",0,0,0);
  constructor(public router: Router,public quizService: QuizService, public sharedservice: SharedService) { }

  ngOnInit(): void {
  }
  OnSubmit() {
    console.log(this.candidate.quiz_mark);
  this.candidate.emailId=this.email;
  this.candidate.quiz_mark= this.quizService.correctAnswerCount;
    console.log(this.candidate.emailId);
    console.log(this.candidate.quiz_mark);
  this.quizService.submitScore(this.candidate).subscribe(() => {
    (response) => {this.handleresponse(response);}
   
  });
}
handleresponse(response){
  if(response=="updated score"){
    alert("Score Updation Successful");
    
  this.router.navigate(['/quizhome']);
  
  }
  else{
    alert("OOPS something went wrong");
   
  this.router.navigate(['/result']);
 
  }
}
restart() {
  localStorage.setItem('qnProgress', "0");
  localStorage.setItem('qns', "");
  localStorage.setItem('seconds', "0");
  this.router.navigate(['/gradhome']);
}

}
