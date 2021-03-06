import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { ProjectService } from '../shared/project.service';
import { Candidate } from '../model/candidate';
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  comp2Val: string;
  can :Candidate = new Candidate(0,"","",0,0,0);
    msg ="";
  router: any;
  candidate: any;
  width:any;
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
 
  constructor(private sharedservice:  SharedService,private service: ProjectService) { }
  
  ngOnInit(): void {
    this.width = 0;
    this.can.emailId = this.sharedservice.mailid;
   
    console.log( this.can.emailId);

    
    let resp=this.service.getgradprofile(this.can.emailId );
    resp.subscribe(
      response => {this.handleSuccessfulResponse (response);}
     );
  }
  
  handleSuccessfulResponse(response)
  {
      this.can=response;
  }
  assignment() {

    const result = this.can.assignment_mark;
    return result;
  }
 project() {

    const result = this.can.project_mark;
    return result;
  }
  quiz() {

    const result = this.can.quiz_mark;
    return result;
  }
  
}
