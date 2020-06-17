import { Component, OnInit } from '@angular/core';
import { Assignment } from '../model/assignment';
import { Router } from '@angular/router';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { FormGroup } from '@angular/forms';
import {NgModule} from '@angular/core';
import { AssignmentService } from '../shared/assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  
  assign: Assignment=new Assignment(0,"","","","");
  msg: any;
  comp2Val: string;
  form: FormGroup;
  constructor(private router:Router, private service : AssignmentService,private sharedservice:  SharedService) { }

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
    this.assign.mailid = this.sharedservice.comp2Val;
  }
  createassignment(){
    
   
  
    console.log(this.assign.mailid);
    
    console.log("hey world!");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      let resp=this.service.createassignment(this.assign);
      resp.subscribe(
        response => {this.check (response);}
        );
     }
     check(response){
       if(response=="Assignment Added Successfully"){
        alert("Assignment Added Successfully");
      this.router.navigate(['/trainerassignment']) 
       } 
       else{
        alert("oops something went wrong");
        this.router.navigate(['/assignment']) 
       }


}


}
