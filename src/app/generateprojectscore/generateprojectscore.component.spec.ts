import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateprojectscoreComponent } from './generateprojectscore.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule ,FormBuilder} from '@angular/forms';
import { ProjectService } from '../shared/project.service';
import { SharedService } from '../shared/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';

describe('GenerateprojectscoreComponent', () => {
  let component: GenerateprojectscoreComponent;
  let fixture: ComponentFixture<GenerateprojectscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule,MatMenuModule,MatToolbarModule,MatDialogModule ],
      declarations: [ GenerateprojectscoreComponent ],
      providers:[ProjectService,SharedService,
        {
          provide: MatDialogRef,
          useValue: {}
        },
       
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateprojectscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
