import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AssignmentComponent } from './assignment.component';
import { FormsModule, ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import {FormGroup} from '@angular/forms';


describe('AssignmentComponent', () => {
  let component: AssignmentComponent;
  let fixture: ComponentFixture<AssignmentComponent>;
  let form: FormGroup;
  
  


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
     
       
        
    ],
      declarations: [ AssignmentComponent ],
      providers:[ProjectService,SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
