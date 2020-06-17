import { Component, OnInit, ViewChild } from '@angular/core';
import { Assignmentcompletion } from '../model/assignmentcompletion';
import { Router } from '@angular/router';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { AssignmentService } from '../shared/assignment.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule,MatDialogConfig,MatDialog } from '@angular/material/dialog';
import { AssignmentComponent } from '../assignment/assignment.component';
import { GenerateprojectscoreComponent } from '../generateprojectscore/generateprojectscore.component';
import { GenerateassignmentscoreComponent } from '../generateassignmentscore/generateassignmentscore.component';

@Component({
  selector: 'app-viewassignmentsubmit',
  templateUrl: './viewassignmentsubmit.component.html',
  styleUrls: ['./viewassignmentsubmit.component.scss']
})
export class ViewassignmentsubmitComponent implements OnInit {
  assign_comp: Assignmentcompletion;
  listData: MatTableDataSource<any>;
  dataSource = new MatTableDataSource<Assignmentcompletion>();
  displayedColumns: string[] = ['id','title', 'grad_mailid','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
  constructor(private router: Router,private service: AssignmentService, private sharedservice:  SharedService, private dialog: MatDialog) { }

  ngOnInit(): void {
    
    console.log("hloo");
    this.service.getassignmentsubmissions().subscribe((data:any[])=>{
      console.log("hloo");
      this.dataSource.data=data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator=this.paginator;
      this.dataSource.filterPredicate = (data, filter) => {
        return this.displayedColumns.some(ele => {
          return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
        });
      };
    });
  }

        
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  updatescore(id,title,grad_mailid){
    this.sharedservice.updatesaid(id);
    this.sharedservice.updatestitle(title);
    this.sharedservice.updateasssmailid(grad_mailid);
 alert("Update Score");
 const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open( GenerateassignmentscoreComponent,dialogConfig);
  }

}
/*
this.service.getassignmentsubmissions().subscribe(
      response => {this.handleSuccessfulResponse (response);}
     );
  }
  
  handleSuccessfulResponse(response)
  {
      this.assign_comp=response;
  }
  updatescore(mailId){
    console.log("hlo");
    console.log(mailId);
    this.sharedservice.updateComp4Val(mailId);

  }
  */