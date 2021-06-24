import { Component, Input, OnInit } from '@angular/core';
import { ResInventoryOrder } from 'src/app/interfaces/inventory/res-inventory-order';
import { ServInventoryOrderService } from 'src/app/services/serv-inventory-order.service';

@Component({
  selector: 'app-kebab-order-table',
  templateUrl: './kebab-order-table.component.html',
  styleUrls: ['./kebab-order-table.component.css']
})
export class KebabOrderTableComponent implements OnInit {

  @Input()
  order:ResInventoryOrder;
  
  constructor(private servInventoryOrder:ServInventoryOrderService) { }

  ngOnInit(): void {
  }

  reverseOrder() {
    this.servInventoryOrder.reverseOrder(this.order.code).subscribe((isReversed)=>{
      if(isReversed){
        this.servInventoryOrder.emitOrdersUpdatedSubject();
      }else {
        console.log("could not reverse order");
        
      }
    });
  }
}
