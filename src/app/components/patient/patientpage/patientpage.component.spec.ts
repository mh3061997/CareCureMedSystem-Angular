import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientpageComponent } from './patientpage.component';

describe('PatientpageComponent', () => {
  let component: PatientpageComponent;
  let fixture: ComponentFixture<PatientpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
