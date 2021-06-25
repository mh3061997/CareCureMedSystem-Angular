import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServInventoryItemService } from 'src/app/services/serv-inventory-item.service';
import { DtoInventoryItemNew } from 'src/app/dtos/dto-inventory-item-new';
import { EnumInventoryItemCategory } from 'src/app/enums/enum-inventory-item-category.enum';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { messages } from 'src/app/messages';

@Component({
  selector: 'app-inventory-new-item-dialog',
  templateUrl: './inventory-new-item-dialog.component.html',
  styleUrls: ['./inventory-new-item-dialog.component.css']
})
export class InventoryNewItemDialogComponent implements OnInit {

  @ViewChild('newItemForm', { static: false }) newItemForm: NgForm;


  constructor(private dialogRef: MatDialogRef<InventoryNewItemDialogComponent>,
    private servInventoryItem: ServInventoryItemService,
    private servUtils:ServUtilitiesService) {

    this.disableBackClick();

  }


  disableBackClick() {
    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close(false);
    });
  }

  onNewInventoryItemSubmit() {
    console.log(this.newItemForm.value);

    const newItem = new DtoInventoryItemNew(this.newItemForm.value.name,
      this.newItemForm.value.category, this.newItemForm.value.price);

      console.log(newItem);

      this.servInventoryItem.addInventoryItem(newItem).subscribe(()=>{
        this.servInventoryItem.emitItemsUpdatedSubject();
        this.dialogRef.close();
        this.servUtils.showSnackBar(messages.inventoryItemCreateSuccess)
      });
      
  }

  getInventoryItemCategories(){
    return Object.values(EnumInventoryItemCategory);
  }
  ngOnInit(): void {
  }

}
