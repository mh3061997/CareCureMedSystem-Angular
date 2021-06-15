import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResInventoryItem } from 'src/app/interfaces/inventory/res-inventory-item';
import { ResInventoryOrder } from 'src/app/interfaces/inventory/res-inventory-order';
import { ServInventoryItemService } from 'src/app/services/serv-inventory-item.service';
import { ServInventoryOrderService } from 'src/app/services/serv-inventory-order.service';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css']
})
export class InventoryPageComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

}
