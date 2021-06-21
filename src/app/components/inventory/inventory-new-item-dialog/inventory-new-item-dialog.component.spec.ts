import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNewItemDialogComponent } from './inventory-new-item-dialog.component';

describe('InventoryNewItemDialogComponent', () => {
  let component: InventoryNewItemDialogComponent;
  let fixture: ComponentFixture<InventoryNewItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryNewItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryNewItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
