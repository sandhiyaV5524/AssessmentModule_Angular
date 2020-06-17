import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateassignmentscoreComponent } from './generateassignmentscore.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';


describe('GenerateassignmentscoreComponent', () => {
  let component: GenerateassignmentscoreComponent;
  let fixture: ComponentFixture<GenerateassignmentscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule,MatMenuModule,MatToolbarModule,MatDialogModule],
      declarations: [ GenerateassignmentscoreComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
       
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateassignmentscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
