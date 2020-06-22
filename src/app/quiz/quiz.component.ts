import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { SharedService } from '../shared/shared.service';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(public router: Router,public quizService: QuizService, public sharedservice: SharedService) { }

  ngOnInit(): void {
    localStorage.setItem('qnProgress', "0");
  localStorage.setItem('qns', "");
  localStorage.setItem('seconds', "0");
 
    this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
      this.quizService.correctAnswerCount=0;
    this.quizService.getQuestions().subscribe(
      (data: any) => {
        this.quizService.qns = data;
        console.log("Quiz data="+this.quizService.qns);
      
        this.startTimer();
      }
    );
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
     // localStorage.setItem('seconds', this.quizservice.seconds.toString());
    }, 1000);
  }

  Answer(qID, choice) {
    this.quizService.qns[this.quizService.qnProgress].choice = choice;
    //localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    //localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    
      
      if (this.quizService.qnProgress == this.quizService.qns.length) {
        clearInterval(this.quizService.timer);
        this.quizService.qns.forEach((e, i) => {
          if (e.ans == e.choice){
            console.log(e);
            this.quizService.correctAnswerCount++;
            e.correct=e.ans;
          }
        });
      this.router.navigate(['/result']);
    }
  }

  quit() {
    localStorage.clear();
    clearInterval(this.quizService.timer);
    this.router.navigate(['/gradhome']);
  }


}
