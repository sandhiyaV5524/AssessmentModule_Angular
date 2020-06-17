import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradhome',
  templateUrl: './gradhome.component.html',
  styleUrls: ['./gradhome.component.scss']
})
export class GradhomeComponent implements OnInit {
username: string;
email: string;
  constructor() { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.email=localStorage.getItem('useremail');
  }

}
