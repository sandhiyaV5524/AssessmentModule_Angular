import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassignmentsubmitComponent } from './viewassignmentsubmit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  MatDialogModule,MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AssignmentService } from '../shared/assignment.service';
import { SharedService } from '../shared/shared.service';

describe('ViewassignmentsubmitComponent', () => {
  let component: ViewassignmentsubmitComponent;
  let fixture: ComponentFixture<ViewassignmentsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule,MatMenuModule,MatToolbarModule, MatDialogModule],
      declarations: [ ViewassignmentsubmitComponent ],
      providers:[AssignmentService,SharedService,
        {
          provide: MatDialog,
          useValue: {}
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassignmentsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
