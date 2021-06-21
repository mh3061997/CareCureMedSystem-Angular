import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNewOrderDialogComponent } from './inventory-new-order-dialog.component';

describe('InventoryNewOrderDialogComponent', () => {
  let component: InventoryNewOrderDialogComponent;
  let fixture: ComponentFixture<InventoryNewOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryNewOrderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryNewOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
