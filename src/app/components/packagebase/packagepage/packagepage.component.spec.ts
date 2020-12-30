import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagepageComponent } from './packagepage.component';

describe('PackagepageComponent', () => {
  let component: PackagepageComponent;
  let fixture: ComponentFixture<PackagepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
