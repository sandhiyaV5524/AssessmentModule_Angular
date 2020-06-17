import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit {
  pro:Project=new Project(0,"","","","","");
  msg: any;
  comp1Val: string;

  constructor(private router:Router, private service: ProjectService, private sharedservice: SharedService) { }

  ngOnInit(): void {
    

  }

  ngAfterContentChecked() {
    this.pro.posted_by = this.sharedservice.mailid;
   
  }
  
 createproject(){
  console.log(this.pro.posted_by);
 
    
   
    console.log("hey world!");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      let resp=this.service.createproject(this.pro);
      resp.subscribe(
        response => {this.check (response);}
        );
     }
     check(response){
       if(response=="project Added Successfully"){
       alert("Assignment Added Successfully");
      this.router.navigate(['/trainerproject']) 
       } 
       else{
        alert("oops something went wrong");
        this.router.navigate(['/createproject'])
       }


}

}
