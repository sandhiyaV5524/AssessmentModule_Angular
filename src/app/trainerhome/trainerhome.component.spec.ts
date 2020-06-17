import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerhomeComponent } from './trainerhome.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';

describe('TrainerhomeComponent', () => {
  let component: TrainerhomeComponent;
  let fixture: ComponentFixture<TrainerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule,MatMenuModule,MatToolbarModule],
      declarations: [ TrainerhomeComponent ],
      providers:[ProjectService,SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
