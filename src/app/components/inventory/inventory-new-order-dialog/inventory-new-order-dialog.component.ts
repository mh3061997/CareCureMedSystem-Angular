import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { DtoInventoryOrderNew } from 'src/app/dtos/dto-inventory-order-new';
import { DtoLookupInventoryItem } from 'src/app/dtos/lookups/dto-lookup-inventory-item';
import { EnumInventoryItemCategory } from 'src/app/enums/enum-inventory-item-category.enum';
import { EnumInventoryOrderType } from 'src/app/enums/enum-inventory-order-type.enum';
import { ServInventoryItemService } from 'src/app/services/serv-inventory-item.service';
import { ServInventoryOrderService } from 'src/app/services/serv-inventory-order.service';

@Component({
  selector: 'app-inventory-new-order-dialog',
  templateUrl: './inventory-new-order-dialog.component.html',
  styleUrls: ['./inventory-new-order-dialog.component.css']
})
export class InventoryNewOrderDialogComponent implements OnInit {

  @ViewChild('newOrderForm', { static: false }) newOrderForm: NgForm;

  isSupply: boolean;
  itemLookups:DtoLookupInventoryItem[] | null;
  itemSelected:DtoLookupInventoryItem | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { isSupply: boolean },
    private dialogRef: MatDialogRef<InventoryNewOrderDialogComponent>,
    private servInventoryOrder: ServInventoryOrderService,
    private servInventoryItem:ServInventoryItemService) {

      this.isSupply = data.isSupply;
    this.disableBackClick();

  }


  disableBackClick() {
    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close(false);
    });
  }

  onNewInventoryItemSubmit() {
    console.log(this.newOrderForm.value);

    // const newOrder = new DtoInventoryOrderNew(
    //   this.newOrderForm.value.units,
    //   this.newOrderForm.value.itemPrice,
    //   this.newOrderForm.value.totalPrice,
    //   this.newOrderForm.value.itemExpiryDate,
    //   new Date().toISOString(),
    //   this.newOrderForm.value.supplierName,
    //   this.newOrderForm.value.type,
    //   this.newOrderForm.value.userMadeBy,
    //   this.newOrderForm.value.item);

    // console.log(newOrder);

    // this.servInventoryOrder.addOrder(newOrder).subscribe(() => {
    //   this.servInventoryOrder.emitOrdersUpdatedSubject();
    //   this.dialogRef.close();
    // });

  }

  onCategoryChange(event:MatSelectChange){
    //clear existing selected doctor
    this.itemSelected = null;
    this.itemLookups = null;

    this.servInventoryItem.getItemsLookupByCategory(event.value).subscribe(itemLookups =>{
    
   this.itemLookups = itemLookups;
      
    });
     
   }


   getInventoryItemCategories(){
    return Object.values(EnumInventoryItemCategory);
  }
  
  getInventoryOrderTypes() {
    return Object.values(EnumInventoryOrderType);
  }

  ngOnInit() {

  }
}
