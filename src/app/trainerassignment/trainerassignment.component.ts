import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { Assignment } from '../model/assignment';
import { ProjectService } from '../shared/project.service';
import { AssignmentService } from '../shared/assignment.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-trainerassignment',
  templateUrl: './trainerassignment.component.html',
  styleUrls: ['./trainerassignment.component.scss']
})
export class TrainerassignmentComponent implements OnInit {
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
  [x: string]: any;
  comp1Val: string;
  assignment: Assignment[]=[];
  rowData=[];
  addrow={};
  colDefs=[];
  columnDefs: { headerName: string; field: string; }[];
  as: Assignment;

  constructor(private router:Router, private service:AssignmentService,private sharedservice:  SharedService,private ngZone: NgZone) { }

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
        {headerName: 'Assignment Id', field: 'a_id' },
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
     this.msg=event.data.title;
     
    console.log(event.data.title);
    console.log(event.data.last_date);
   
    this.service.deleteassignment(event.data.a_id).subscribe(
      (response) => this.ngZone.run(() => {this.handleSuccessfulResponse (response);}
     ));
  }
  
  handleSuccessfulResponse(response)
  {
      if(response=="Assignment is deleted successfully"){
        console.log(response);
      }
      else
      console.log("Can't be deleted");
      this.router.navigate(['/trainerassignment']);
  }
  viewsubmit(){
    console.log("Assignment submission");
    this.router.navigate(['/viewassignmentsubmit']);
  }
}
