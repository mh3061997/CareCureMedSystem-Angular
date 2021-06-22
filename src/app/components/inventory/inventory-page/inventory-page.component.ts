import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResInventoryItem } from 'src/app/interfaces/inventory/res-inventory-item';
import { ResInventoryOrder } from 'src/app/interfaces/inventory/res-inventory-order';
import { ServInventoryItemService } from 'src/app/services/serv-inventory-item.service';
import { ServInventoryOrderService } from 'src/app/services/serv-inventory-order.service';
import { InventoryNewItemDialogComponent } from '../inventory-new-item-dialog/inventory-new-item-dialog.component';
import { InventoryNewOrderDialogComponent } from '../inventory-new-order-dialog/inventory-new-order-dialog.component';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef,
    private dialogAddNewInventoryItem: MatDialog,
    private dialogAddNewInventoryOrder: MatDialog) { }

  ngOnInit(): void {

  }

  openAddNewInventoryItemDialog() {
    this.dialogAddNewInventoryItem.open(InventoryNewItemDialogComponent, { disableClose: true });
  }

  openAddNewInventoryOrderDialog(isSupply: boolean) {
    this.dialogAddNewInventoryOrder.open(InventoryNewOrderDialogComponent, {
      data: {
        isSupply: isSupply
      }, 
      disableClose: true
    });
  }

}
