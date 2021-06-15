import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { ResInventoryOrder } from 'src/app/interfaces/inventory/res-inventory-order';
import { ServHttpUtilsService } from 'src/app/services/serv-http-utils.service';
import { ServInventoryItemService } from 'src/app/services/serv-inventory-item.service';
import { ServInventoryOrderService } from 'src/app/services/serv-inventory-order.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-inventory-order-table',
  templateUrl: './inventory-order-table.component.html',
  styleUrls: ['./inventory-order-table.component.css']
})
export class InventoryOrderTableComponent implements AfterViewInit {

  orders: ResInventoryOrder[];
  displayedColumns: string[] = [
    'code',
    'units',
    'itemPrice',
    'totalPrice',
    'itemExpiryDate',
    'orderDate',
    'supplierName',
    'type',
    'userMadeBy',
    'item',
    'cancelled',
    " ",
  ];
  dataSource: MatTableDataSource<ResInventoryOrder>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  paginatorPageSize: number = 10;
  ordersCount: number;
  @ViewChild(MatSort) sort: MatSort;

  showSpinner = false;


  constructor(
    private servInventoryOrder: ServInventoryOrderService,
    private cdr: ChangeDetectorRef,
    public servUtils: ServUtilitiesService,
    private servHttpUtils: ServHttpUtilsService,
    ) {

  }


  // AfterViewInit to make sure paginator and sort are ready and created
  ngAfterViewInit() {

    this.getOrders(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
    this.onSortingChange();
    this.onPaginationChange();
  }

  getOrders(pageNumber: number, pageSize: number, sortColumn: string, sortDirection: string) {
    
    this.showSpinnerToggle();
    this.servInventoryOrder.getOrders(pageNumber, pageSize, sortColumn, sortDirection).subscribe(response => {

      let count = response.headers.get("X-Total-Count");
      this.ordersCount = count ? parseInt(count) : 0;
      this.orders = response!.body!;
      this.assignNewDataSource();
      this.hideSpinnerToggle();

    });

  }

  assignNewDataSource() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.orders);
    this.updateDataSourceSort();
  }

  updateDataSourceSort() {

    this.dataSource.sort = this.sort;
  }

  onSortingChange() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe((newSortAndDirection: any) => {

      this.paginator.firstPage();
      this.getOrders(0, this.paginator.pageSize, newSortAndDirection.active, newSortAndDirection.direction);

    });
  }

  onPaginationChange() {
    this.paginator.page.subscribe((page: any) => {

      //page Size has changed reset to page 0
      if (page.pageSize != this.paginatorPageSize) {
        this.paginator.firstPage();
      }
      //update last saved page size
      this.paginatorPageSize = page.pageSize;
      this.getOrders(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showSpinnerToggle() {
    this.showSpinner = true;
    this.cdr.detectChanges();
  }

  hideSpinnerToggle() {
    this.showSpinner = false;
  }

}
