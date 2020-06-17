import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../model/project';
import { Observable } from 'rxjs';
import { Assignment } from '../model/assignment';
import { Projectcompletion } from '../model/projectcompletion';
import { Candidate } from '../model/candidate';
import { environment } from '../../environments/environment';
import { Assignmentcompletion } from '../model/assignmentcompletion';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http : HttpClient) { }
 
  deleteproject(pid: any) {    
      return this.http.delete(environment.baseUrl+"project/deleteproject/"+pid,{responseType: 'text' as 'json'});
  
     }



  getgradprofile(emailId: string) {
    console.log("score board");
    return this.http.get<Candidate>(environment.baseUrl+"enter/getprofile/"+emailId);
  }
  
  getsubmissions() {
    return this.http.get<Projectcompletion[]>(environment.baseUrl+'/project/getsubmissions');
  }
  
  submit_project(pro_com: Projectcompletion) {
    return this.http.post(environment.baseUrl+"enter/submit_response",pro_com,{responseType: 'text' as 'json'})
  }
 
  getprojectbyid(mail: string) {
    console.log("Display project for grad");
    return this.http.get<Project[]>(environment.baseUrl+'project/getproject/'+mail);
  }
 
  public createproject(pro: Project) {
    return this.http.post(environment.baseUrl+"project/addproject",pro,{responseType: 'text' as 'json'})
    
  }
 
  getprojectbyidtrainer() {
    console.log("Display project for admin");
    return this.http.get<Project[]>(environment.baseUrl+'project/getprojects');
  }
  
  public  updateprojectscore(candidate: Candidate) {
    console.log("update score");
    return this.http.put(environment.baseUrl+"enter/updatescore",candidate,{responseType: 'text' as 'json'})
    }
  

 
}
