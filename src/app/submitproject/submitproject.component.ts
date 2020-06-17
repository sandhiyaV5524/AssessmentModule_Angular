import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Projectcompletion } from '../model/projectcompletion';
import { Router } from '@angular/router';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-submitproject',
  templateUrl: './submitproject.component.html',
  styleUrls: ['./submitproject.component.scss']
})
export class SubmitprojectComponent implements OnInit {
comp2Val: string;
comp3Val: string;

Complete=["<25%","25-50%","50%"];
Test=["unit-testing","integration-testing","both"]
pro_com= new Projectcompletion("","","","","");
msg ="";

  constructor(private router: Router, private service:ProjectService, private sharedservice: SharedService) { }

  ngOnInit(): void {
    
  }
  submit(){
    this.comp2Val = this.sharedservice.comp2Val;
    this.comp3Val = this.sharedservice.comp3Val;
    console.log("inside submitproject 2")
    console.log(this.comp2Val)
    console.log("inside submitproject 2")
    console.log(this.comp3Val)
    this.pro_com.mailId=this.comp2Val;
    this.pro_com.title=this.comp3Val;
    console.log(this.pro_com.mailId);
    console.log(this.pro_com.title);
    let resp=this.service.submit_project(this.pro_com);
     
        resp.subscribe(
          response => {
            console.log(response);
            
            this.check (response);
          }
          );
       
  }
  check(response) {
    if(response=="project Added Successfully"){
           
      alert("Project updation submitted");
     this.router.navigate(['/gradproject']) ;
        
       
      } 
      else{
       alert("project updation can't be submit");
        this.router.navigate(['/submitproject']); 
      }
  }
}
