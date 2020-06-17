import { Component, OnInit, ViewChild } from '@angular/core';
import { Projectcompletion } from '../model/projectcompletion';
import { SharedService } from '../shared/shared.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ProjectService } from '../shared/project.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { GenerateprojectscoreComponent } from '../generateprojectscore/generateprojectscore.component';
import { MatDialogModule,MatDialogConfig,MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-viewprojectsubmit',
  templateUrl: './viewprojectsubmit.component.html',
  styleUrls: ['./viewprojectsubmit.component.scss']
})
export class ViewprojectsubmitComponent implements OnInit {
  pro_comp: Projectcompletion;
  listData: MatTableDataSource<any>;
  dataSource = new MatTableDataSource<Projectcompletion>();
 
  displayedColumns: string[] = ['mailId','title', 'completion','Testing','Code_Coverage','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
  constructor(private router: Router,private service: ProjectService, private sharedservice:  SharedService, private dialog: MatDialog) { }

  ngOnInit(): void {
    
    console.log("hloo");
    this.service.getsubmissions().subscribe((data:any[])=>{
      console.log("hloo");
      this.dataSource.data=data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator=this.paginator;
    });
  }

        
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  updatescore(mailId,title){
    this.sharedservice.updateprojectmailid(mailId);
    this.sharedservice.updateprojecttitle(title);
   
 alert("Update Score");
 const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open( GenerateprojectscoreComponent,dialogConfig);
  }
 /* pro_comp: Projectcompletion;
  constructor(private router: Router,private service: ProjectService, private sharedservice:  SharedService) { }

  ngOnInit(): void {
    this.service.getsubmissions().subscribe(
      response => {this.handleSuccessfulResponse (response);}
     );
  }
  
  handleSuccessfulResponse(response)
  {
      this.pro_comp=response;
  }
  updatescore(mailId){
    console.log("hlo");
    console.log(mailId);
    this.sharedservice.updateComp4Val(mailId);

  }*/
}
