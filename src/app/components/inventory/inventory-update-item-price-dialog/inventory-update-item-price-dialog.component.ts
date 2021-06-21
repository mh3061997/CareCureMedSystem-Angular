import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResInventoryItem } from 'src/app/interfaces/inventory/res-inventory-item';
import { ServInventoryItemService } from 'src/app/services/serv-inventory-item.service';

@Component({
  selector: 'app-inventory-update-item-price-dialog',
  templateUrl: './inventory-update-item-price-dialog.component.html',
  styleUrls: ['./inventory-update-item-price-dialog.component.css']
})
export class InventoryUpdateItemPriceDialogComponent implements OnInit {

  item: ResInventoryItem;
  @ViewChild('updatePriceForm', { static: false }) updatePriceForm: NgForm;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { item: ResInventoryItem },
    public dialogRef: MatDialogRef<InventoryUpdateItemPriceDialogComponent>,
    private servInventoryItem: ServInventoryItemService,
  ) {

    this.item = data.item;
    this.disableBackClick();

  }

  onUpdatePriceSubmit() {
    this.servInventoryItem
    .updateInventoryItemSellingPrice(this.item.code, this.updatePriceForm.value.price)
    .subscribe(() => { 
      console.log("firing");
      
        this.servInventoryItem.emitItemsUpdatedSubject();
        this.dialogRef.close(true);
    });

  }


  disableBackClick() {
    this.dialogRef.backdropClick().subscribe(result => {
      this.dialogRef.close(false);
      // console.log("backclick")
    });
  }
  ngOnInit(): void {
  }

}
