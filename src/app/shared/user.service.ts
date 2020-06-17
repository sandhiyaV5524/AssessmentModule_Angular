import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { Candidate } from '../model/candidate';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private LoggedInStatus=false

  constructor(private http : HttpClient ) { }

  setLoggedIn(value: boolean){
    this.LoggedInStatus=value;

  }

  get isLoggedIn(){
    return this.LoggedInStatus;
  }

  chartAssignmentMark() {
    return this.http.get(environment.baseUrl+"enter/chartassignmentmark");
  }

  chartLocation() {
    return this.http.get(environment.baseUrl+"enter/chartmark");
  }
  




  checkUser(email): Observable<any>
  {
    return this.http.get(environment.baseUrl+"enter/login/"+email,{responseType: 'text' as 'json'});
    console.log("Through google sign");
  }


  getcandidate() {
    console.log("All Candidates List");
    return this.http.get<Candidate[]>(environment.baseUrl+'enter/getcandidate');
  }
}
