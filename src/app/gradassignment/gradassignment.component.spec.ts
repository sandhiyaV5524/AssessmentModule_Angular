import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradassignmentComponent } from './gradassignment.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('GradassignmentComponent', () => {
  let component: GradassignmentComponent;
  let fixture: ComponentFixture<GradassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule,MatMenuModule,MatToolbarModule],
      declarations: [ GradassignmentComponent ],
      providers:[ProjectService,SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
