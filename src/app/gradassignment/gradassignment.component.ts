import { Component, OnInit } from '@angular/core';
import { Assignment } from '../model/assignment';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { ProjectService } from '../shared/project.service';
import { $ } from 'protractor';
import { Assignmentcompletion } from '../model/assignmentcompletion';
import { AssignmentService } from '../shared/assignment.service';

@Component({
  selector: 'app-gradassignment',
  templateUrl: './gradassignment.component.html',
  styleUrls: ['./gradassignment.component.scss']
})
export class GradassignmentComponent implements OnInit {
  assignment: Assignment[]=[];
  msg: any;
  rowData=[];
  addrow={};
  colDefs=[];
  columnDefs: { headerName: string; field: string; }[];
  as: Assignment;
  ac= new Assignmentcompletion(0,"","",false);
  username=localStorage.getItem('username');
 email=localStorage.getItem('useremail');

  constructor(private router:Router, private service:AssignmentService,private sharedservice:  SharedService) { }

  ngOnInit(): void {
    this.viewassignment();
  }
  viewassignment(){
    let resp=this.service.getassignment();
    console.log("abc");
    resp.subscribe((data :any[])=>{
      console.log(data);
      this.assignment=data;
      
      for(let assign of this.assignment)
      {
        this.addrow["a_id"]=assign.a_id;
          this.addrow["title"]=assign.title;
          this.addrow["description"]=assign.description;
          this.addrow["mailid"]=assign.mailid;
          this.addrow["last_date"]=assign.last_date;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Assignment id', field: 'a_id' },
        {headerName: 'Title', field: 'title' },
        {headerName: 'Description', field: 'description'},
        {headerName: 'mailid', field: 'mailid'},
        {headerName: 'Last_date', field: 'last_date'}
      ];
    });
     
  }
  createassignment(){
    console.log("create");
    this.router.navigate(['/assignment'])

  }
  public onRowClicked(event: any)
  {
    alert("Want to submit the assignment");
    
    this.msg=event.data.title;
     
    console.log(event.data.title);
    console.log(event.data.description);
    this.sharedservice.updateaid(event.data.a_id);
    this.sharedservice.updatetitle(event.data.title);
    this.sharedservice.updateassmailid(event.data.mailid);

    sessionStorage.setItem('loggedTitle', event.data.title);
    sessionStorage.setItem('loggedDescription', event.data.description);

    this.ac.id= event.data.a_id;
    this.ac.Title=event.data.title;
    this.ac.grad_mailid=this.sharedservice.mailid;
    this.ac.submitted=true;
    let resp=this.service.submit_assignmnet(this.ac);
     
    resp.subscribe(
      response => {
        console.log(response);
        
        this.check (response);
      }
      );
   
}
check(response) {
if(response=="assignment Added Successfully"){
       
  alert("Assignment response submitted");
 this.router.navigate(['/gradassignment']) ;
    
   
  } 
  else{
   alert("Assignment response can't be submitted");
  }
}

}

