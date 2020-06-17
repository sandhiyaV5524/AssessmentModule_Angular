import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerprojectComponent } from './trainerproject.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

describe('TrainerprojectComponent', () => {
  let component: TrainerprojectComponent;
  let fixture: ComponentFixture<TrainerprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule,MatMenuModule,MatToolbarModule],
      declarations: [ TrainerprojectComponent ],
      providers:[ProjectService,SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
