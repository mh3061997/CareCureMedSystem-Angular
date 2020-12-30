import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagebaseComponent } from './packagebase.component';

describe('PackagebaseComponent', () => {
  let component: PackagebaseComponent;
  let fixture: ComponentFixture<PackagebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
