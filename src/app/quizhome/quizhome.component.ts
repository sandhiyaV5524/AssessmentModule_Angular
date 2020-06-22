import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizhome',
  templateUrl: './quizhome.component.html',
  styleUrls: ['./quizhome.component.scss']
})
export class QuizhomeComponent implements OnInit {
 username=localStorage.getItem('username');
 email=localStorage.getItem('useremail');
  constructor() { }

  ngOnInit(): void {
  }

}
