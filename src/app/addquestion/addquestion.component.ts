import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { AssignmentService } from '../shared/assignment.service';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {
  answer=["0","1","2","3"];
  Complete=["0","1","2","3"];
  que: Question=new Question("","","","","",0);

  constructor(private router:Router, private service : QuizService,private sharedservice:  SharedService) { }

  ngOnInit(): void {
  }
  addqn(){
    let resp=this.service.addqn(this.que);
      resp.subscribe(
        response => {this.check (response);}
        );
     }
     check(response){
       if(response=="Question Added Successfully"){
        alert("Question Added Successfully");
      this.router.navigate(['/trainerhome']) 
       } 
       else{
        alert("oops something went wrong");
       
       }


  }
}
