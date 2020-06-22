import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Candidate } from '../model/candidate';
import { ProjectService } from '../shared/project.service';
import { Router } from '@angular/router';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generateprojectscore',
  templateUrl: './generateprojectscore.component.html',
  styleUrls: ['./generateprojectscore.component.scss']
})
export class GenerateprojectscoreComponent implements OnInit {
emailId="";
candidate= new Candidate(0,"","",0,0,0);
  
  msg ="";
 
  constructor(private router: Router, private sharedservice: SharedService, private service: ProjectService,
    public dialogRef: MatDialogRef<GenerateprojectscoreComponent> ) { }

  ngOnInit(): void {
    
  }
  ngAfterContentChecked() {

   
   
  }
update(){
  
  console.log(this.candidate.project_mark);
  this.candidate.emailId=this.sharedservice.projectmailid;
    console.log(this.candidate.emailId);
    this.service.updateprojectscore(this.candidate).subscribe(
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
    this.router.navigate(['/trainerproject']);
    
    }
    else{
      alert("OOPS something went wrong");
      this.onClose();
    this.router.navigate(['/trainerproject']);
   
    }
}
onClose() {
    
  this.dialogRef.close();
}
}
