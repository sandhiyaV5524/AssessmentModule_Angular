import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../environments/environment';
import { Candidate } from '../model/candidate';
import { Project } from '../model/project';
import { Assignment } from '../model/assignment';


describe('ProjectService', () => {
  let service: ProjectService;
  let  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule]
    });
    service = TestBed.inject(ProjectService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  
 /* describe('getassignment', () => {

    it('should return all the assignments', () => {
    
      service.getassignment().subscribe((data:any[])=>{
        expect(data.length).toEqual(7);
      })
   
    const  requestt = httpMock.expectOne(environment.baseUrl+"assignment/getassignment");
    
    expect(requestt.request.method).toBe("GET");
  
    
    httpMock.verify();
    
    });
    
  });
  */
    describe('getproject', () => {

      it('should return all the projects', () => {
      
        service.getprojectbyidtrainer().subscribe((data:any[])=>{
          expect(data.length).toEqual(7);
        })
     
      const  requestt = httpMock.expectOne(environment.baseUrl+"project/getprojects");
      
      expect(requestt.request.method).toBe("GET");
    
      
      httpMock.verify();
      
      });
    });

    describe('updateprojectscore()', () => {
      let expectedOpps: Candidate;
      beforeEach(() => {
         
        expectedOpps = 
         { emp_no: 102,
          name: 'asra',
          emailId: 'asramogal@gmail.com',
          project_mark: 75,
          assignment_mark: 30 } as Candidate;
      });
     
      it('should update an score', () => {
       

       
    
        service. updateprojectscore(expectedOpps)
          .subscribe(data => {
            expect(data).toEqual('Updation Successfully');
          });
       
        });
      });


    

    describe('createproject()', () => {
      let expectedOpps: Project;

        beforeEach(() => {
         
          expectedOpps = 
           {
            title : 'Candidate Module',
            description : 'Do Testing',
            assigned_to: 'navinv@gmail.com',
        posted_by: 'v.sandhiya@accoliteindia.com',
        last_date: '2020-10-10' } as Project;
        });
      it('should add an Project', () => {
        service. createproject(expectedOpps)
          .subscribe(data => {
            expect(data).toEqual('Project created Successfully');
          });
 
      });
    });  
    
    /*describe('createassignment()', () => {
      let expectedOpps: Assignment;

        beforeEach(() => {
         
          expectedOpps = 
           {
            title : 'DBMS',
            description : 'Uber Ride',
            mailid: 'v.sandhiya@accoliteindia.com',
            last_date: '2020-10-10'} as Assignment;
        });
      it('should add an Assignment', () => {
        service.   createassignment(expectedOpps)
          .subscribe(data => {
            expect(data).toEqual('Assignment created Successfully');
          });
 
      });
    });  
*/      

    
    
});
