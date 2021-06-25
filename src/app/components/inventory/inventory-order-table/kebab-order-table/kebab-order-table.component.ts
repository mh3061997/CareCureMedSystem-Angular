import { Component, Input, OnInit } from '@angular/core';
import { ResInventoryOrder } from 'src/app/interfaces/inventory/res-inventory-order';
import { messages } from 'src/app/messages';
import { ServInventoryOrderService } from 'src/app/services/serv-inventory-order.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-kebab-order-table',
  templateUrl: './kebab-order-table.component.html',
  styleUrls: ['./kebab-order-table.component.css']
})
export class KebabOrderTableComponent implements OnInit {

  @Input()
  order:ResInventoryOrder;
  
  constructor(private servInventoryOrder:ServInventoryOrderService,
    private servUtils:ServUtilitiesService) { }

  ngOnInit(): void {
  }

  reverseOrder() {
    this.servInventoryOrder.reverseOrder(this.order.code).subscribe((isReversed)=>{
      if(isReversed){
        this.servInventoryOrder.emitOrdersUpdatedSubject();
        this.servUtils.showSnackBar(messages.inventoryOrderReverseSuccess);
      }else {
        this.servUtils.showSnackBar(messages.inventoryOrderReverseFail);

      }
    });
  }
}
