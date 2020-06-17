import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradtrendsComponent } from './gradtrends.component';

describe('GradtrendsComponent', () => {
  let component: GradtrendsComponent;
  let fixture: ComponentFixture<GradtrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradtrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradtrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
