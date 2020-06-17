import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectsubmitComponent } from './viewprojectsubmit.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule,MatDialog, MatDialogConfig } from '@angular/material/dialog';

describe('ViewprojectsubmitComponent', () => {
  let component: ViewprojectsubmitComponent;
  let fixture: ComponentFixture<ViewprojectsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule,MatMenuModule,MatToolbarModule,
        MatDialogModule
      ],
      declarations: [ ViewprojectsubmitComponent ],
      providers:[ProjectService,SharedService,
        {
          provide: MatDialog,
          useValue: {}
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
