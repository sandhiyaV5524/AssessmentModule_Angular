import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { Router } from '@angular/router';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-gradproject',
  templateUrl: './gradproject.component.html',
  styleUrls: ['./gradproject.component.scss']
})
export class GradprojectComponent implements OnInit {
  [x: string]: any;

  loginemail: string;
  comp1Val: string;
  project: Project[]=[];
  rowData=[];
  addrow={};
  colDefs=[];
  columnDefs: { headerName: string; field: string; }[];
  pro: Project;
 username=localStorage.getItem('username');
email=localStorage.getItem('useremail');
  constructor(private router:Router, private service:ProjectService,private sharedservice:  SharedService) { }

  ngOnInit(): void{

    this.viewproject();
  }
  viewproject(){
    this.loginemail= this.sharedservice.mailid;
    
    let resp=this.service.getprojectbyid( this.loginemail);
    console.log("abc");
    resp.subscribe((data :any[])=>{
      console.log(data);
      this.project=data;
      
      for(let projec of this.project)
      {
         
          this.addrow["title"]=projec.title;
          this.addrow["assigned_to"]=projec.assigned_to;
          this.addrow["posted_by"]=projec.posted_by;
          this.addrow["last_date"]=projec.last_date;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
       
        {headerName: 'Title', field: 'title' },
        {headerName: 'Assigned_to', field: 'assigned_to'},
        {headerName: 'Posted_by', field: 'posted_by'},
        {headerName: 'Last_date', field: 'last_date'}
      ];
    });
 
  }
  public onRowClicked(event: any)
  {
  this.sharedservice.updateComp2Val(event.data.title);
  this.sharedservice.updateComp3Val(event.data.assigned_to);

    this.msg=event.data.title;
     
    console.log(event.data.title);
    console.log(event.data.last_date);
   
    this.router.navigate(['/submitproject']);
  }
}
