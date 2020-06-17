import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { AssignmentService } from '../shared/assignment.service';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generateassignmentscore',
  templateUrl: './generateassignmentscore.component.html',
  styleUrls: ['./generateassignmentscore.component.scss']
})
export class GenerateassignmentscoreComponent implements OnInit {
  emailId="";
  candidate= new Candidate(0,"","",0,0);
    
    msg ="";
   
    constructor(private router: Router, private sharedservice: SharedService, private service: AssignmentService,
      public dialogRef: MatDialogRef<GenerateassignmentscoreComponent> ) { }
  
    ngOnInit(): void {
      
    }
    ngAfterContentChecked() {
 
     
     
    }
  update(){
    console.log("hii");
 
    console.log(this.candidate.assignment_mark);
    this.candidate.emailId = this.sharedservice.asssmailid;
    
     
      this.service.updateassignmentscore(this.candidate).subscribe(
        response => {this.handleSuccessfulResponse (response);}
       );
  
  }
  handleSuccessfulResponse(response)
  {
    console.log(response);
      this.candidate=response;
      if(response=="updated score"){
  
      
      alert("Score Updation Successful");
      this.onClose();
      this.router.navigate[('/viewassignmentsubmit')];

      }
      else{
      
      alert("OOPS something went wrong");
      this.onClose();
      this.router.navigate[('/viewassignmentsubmit')];
      }
  }

  onClose() {
    
    this.dialogRef.close();
  }
  }
  
