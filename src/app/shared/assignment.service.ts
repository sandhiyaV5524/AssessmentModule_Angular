import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Assignmentcompletion } from '../model/assignmentcompletion';
import { environment } from '../../environments/environment';
import { Assignment } from '../model/assignment';
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  constructor(private http : HttpClient) { }
  chartAssignmentLastdate() {
    return this.http.get(environment.baseUrl+"enter/chartassignmentlastdate");
  }

  updateassignmentscore(candidate: Candidate) {
    console.log("update assignment score"+candidate.emailId+candidate.assignment_mark);
    return this.http.put(environment.baseUrl+"enter/updateassignmentscore",candidate,{responseType: 'text' as 'json'})
  }

 
  getassignmentsubmissions() {
    return this.http.get<Assignmentcompletion[]>(environment.baseUrl+'/assignment/getsubmissions');
  }

  submit_assignmnet(ac: Assignmentcompletion) {
    return this.http.post(environment.baseUrl+"assignment/submit_assignment",ac,{responseType: 'text' as 'json'})
  }

  deleteassignment(a_id: any) {
    console.log("delete assignment");
    return this.http.delete(environment.baseUrl+"assignment/deleteassignment/"+a_id);
  }

  getassignment() {
    console.log("Display project for assignment");
    return this.http.get<Assignment[]>(environment.baseUrl+'assignment/getassignment');
  }
  
  createassignment(as: Assignment) {
    return this.http.post(environment.baseUrl+"assignment/addassignment",as,{responseType: 'text' as 'json'})
   
  }
}
