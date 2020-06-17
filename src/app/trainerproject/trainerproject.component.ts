import { Component, OnInit, NgZone } from '@angular/core';
import { Project } from '../model/project';
import { SharedService } from '../shared/shared.service';
import { ProjectService } from '../shared/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerproject',
  templateUrl: './trainerproject.component.html',
  styleUrls: ['./trainerproject.component.scss']
})
export class TrainerprojectComponent implements OnInit {
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
  [x: string]: any;
  comp1Val: string;
  project: Project[]=[];
  rowData=[];
  addrow={};
  colDefs=[];
  columnDefs: { headerName: string; field: string; }[];
  pro: Project;
  constructor(private router:Router, private service:ProjectService,private sharedservice:  SharedService,private ngZone: NgZone) { }

  ngOnInit(): void {
    this.comp1Val = this.sharedservice.mailid;
    this.viewproject();
  }
  viewproject(){
    let resp=this.service.getprojectbyidtrainer();
    console.log("abc");
    resp.subscribe((data :any[])=> this.ngZone.run(() =>{
      console.log(data);
      this.project=data;
      
      for(let projec of this.project)
      {
          this.addrow["pid"]=projec.pid;
          this.addrow["title"]=projec.title;
          this.addrow["assigned_to"]=projec.assigned_to;
          this.addrow["posted_by"]=projec.posted_by;
          this.addrow["last_date"]=projec.last_date;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Project Id', field: 'pid' },
        {headerName: 'Title', field: 'title' },
        {headerName: 'Assigned_to', field: 'assigned_to'},
        {headerName: 'Posted_by', field: 'posted_by'},
        {headerName: 'Last_date', field: 'last_date'}
      ];
    }));
 
  }
  createproject(){
    console.log("create");
    this.router.navigate(['/createproject'])

  }
  public onRowClicked(event: any)
  {
    

    this.msg=event.data.title;
     
    console.log(event.data.title);
    console.log(event.data.last_date);
    this.service.deleteproject(event.data.pid).subscribe(
      (response) => this.ngZone.run(() => {this.handleSuccessfulResponse (response);}
     ));
  }
  
  handleSuccessfulResponse(response)
  { if(response=="Project Deleted Successfully"){
   window.alert(response);
    this.router.navigate(['/trainerproject']);
  }
  else{
 window.alert("Can't be deleted");
  this.router.navigate(['/trainerproject']);
  }
}
  
  viewsubmit(){
    console.log("project submission");
    this.router.navigate(['/viewprojectsubmit']);
  }
  
  
  

}
