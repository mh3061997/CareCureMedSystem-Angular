import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddMembershipDialogComponent } from './patient-add-membership-dialog.component';

describe('PatientAddMembershipDialogComponent', () => {
  let component: PatientAddMembershipDialogComponent;
  let fixture: ComponentFixture<PatientAddMembershipDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAddMembershipDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddMembershipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
