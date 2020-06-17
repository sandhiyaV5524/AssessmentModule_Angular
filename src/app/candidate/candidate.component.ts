import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { SharedService } from '../shared/shared.service';
import { Candidate } from '../model/candidate';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
  candidate: Candidate;
  Allcandidate: Candidate[]=[];
  rowData=[];
  addrow={};
  colDefs=[];
  columnDefs: { headerName: string; field: string; }[];
  private gridApi: any;
  private gridColumnApi;
  private sortingOrder;

  constructor(private service : UserService,private sharedservice:  SharedService) { }

  ngOnInit(): void {
    this.showcandidatelist();
  }
showcandidatelist(){
      let resp=this.service.getcandidate();

    resp.subscribe((data :any[])=>{
      console.log(data);
      this.Allcandidate=data;
      
      for(let allcandidate of this.Allcandidate)
      {
          this.addrow["emp_no"]=allcandidate.emp_no;
          this.addrow["name"]=allcandidate.name;
          this.addrow["emailId"]=allcandidate.emailId;
          this.addrow["project_mark"]=allcandidate.project_mark;
          this.addrow["assignment_mark"]=allcandidate.assignment_mark;
          this.rowData=this.rowData.concat(this.addrow);
          this.addrow={};
      }
      this.columnDefs = [
        {headerName: 'Grad Num', field: 'emp_no'},
        {headerName: 'Name', field: 'name' },
        {headerName: 'Email-id', field: 'emailId'},
        {headerName: 'Project Mark', field: 'project_mark'},
        {headerName: 'Assignment Mark', field: 'assignment_mark'}
      ];
    });
 
  }
 onGridReady(params){
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
    params.api.setRowData(this.rowData);
  }
  }


