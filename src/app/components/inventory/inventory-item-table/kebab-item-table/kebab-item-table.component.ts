import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResInventoryItem } from 'src/app/interfaces/inventory/res-inventory-item';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { InventoryUpdateItemPriceDialogComponent } from '../../inventory-update-item-price-dialog/inventory-update-item-price-dialog.component';

@Component({
  selector: 'app-kebab-item-table',
  templateUrl: './kebab-item-table.component.html',
  styleUrls: ['./kebab-item-table.component.css']
})
export class KebabItemTableComponent implements OnInit {

  @Input()
  item: ResInventoryItem;
  constructor(private dialogUpdateItemPrice: MatDialog) { }

  ngOnInit(): void {
  }

  openUpdateItemPriceDialog() {
    const dialogRef = this.dialogUpdateItemPrice.open(InventoryUpdateItemPriceDialogComponent, {
      data: {
        item: this.item
      },
      disableClose: true
    });

  }
}
