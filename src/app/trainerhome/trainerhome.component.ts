import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-trainerhome',
  templateUrl: './trainerhome.component.html',
  styleUrls: ['./trainerhome.component.scss']
})
export class TrainerhomeComponent implements OnInit {
  username=localStorage.getItem('username');
  email=localStorage.getItem('useremail');
title: string;
loginemail: string;
  constructor(private router: Router,private sharedservice: SharedService) { }

  ngOnInit(): void {
   this.loginemail= this.sharedservice.mailid;
  }
candidatelist(){
  this.title="welcome";
}
showhometab(){
this.router.navigate[('/trainerhome')]
}

}
