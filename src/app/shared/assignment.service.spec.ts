import { TestBed } from '@angular/core/testing';

import { AssignmentService } from './assignment.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../environments/environment';
import {HttpClientModule} from '@angular/common/http';

describe('AssignmentService', () => {
  let service: AssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentService);
    imports: [RouterTestingModule, 
      HttpClientTestingModule, 
      FormsModule,HttpClientModule]
  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
