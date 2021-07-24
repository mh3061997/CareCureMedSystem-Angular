import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EnumInventoryItemCategory } from 'src/app/enums/enum-inventory-item-category.enum';
import { ResInventoryItem } from 'src/app/interfaces/inventory/res-inventory-item';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServHttpUtilsService } from 'src/app/services/serv-http-utils.service';
import { ServInventoryItemService } from 'src/app/services/serv-inventory-item.service';
import { ServInventoryOrderService } from 'src/app/services/serv-inventory-order.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { InventoryUpdateItemPriceDialogComponent } from '../inventory-update-item-price-dialog/inventory-update-item-price-dialog.component';

@Component({
  selector: 'app-inventory-item-table',
  templateUrl: './inventory-item-table.component.html',
  styleUrls: ['./inventory-item-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class InventoryItemTableComponent implements AfterViewInit {


  items: ResInventoryItem[];
  expandedElement: ResInventoryItem | null;
  showSpinner = false;
  displayedColumns: string[] = [
    "code",
    "name",
    "availableUnits",
    "category",
    "sellingPrice",
    ' ',
  ];

  dataSource: MatTableDataSource<ResInventoryItem>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  paginatorPageSize: number = 10;
  itemsCount: number;
  @ViewChild(MatSort) sort: MatSort;

  category: EnumInventoryItemCategory | null;

  constructor(
    private servInventoryItem: ServInventoryItemService,
    public servUtils: ServUtilitiesService,
    private servHttpUtils: ServHttpUtilsService,
    private cdr: ChangeDetectorRef,
    private servInventoryOrder:ServInventoryOrderService,
    private authService:AuthService) { }

  ngAfterViewInit() {

    this.getItems(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.category);
    this.onSortingChange();
    this.onPaginationChange();
    this.servInventoryItem.getItemsSubject()
    .subscribe(()=>{
     // console.log("it was fired");
      
      this.getItems(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.category);

    })
    this.servInventoryOrder.getOrdersSubject()
    .subscribe(()=>{
     // console.log("it was fired");
      
      this.getItems(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.category);

    })
  }

  formatDate(dateString:any){
    return this.servUtils.formatDate(dateString);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getItems(pageNumber: number, pageSize: number, sortColumn: string, sortDirection: string, category: EnumInventoryItemCategory | null) {
    console.log(`Getting Items: pageNumber: ${pageNumber}, pageSize: ${pageSize}, sortColumn: ${sortColumn}, sortDirection: ${sortDirection} ,category: ${category}`);

    this.showSpinnerToggle();
    this.servInventoryItem.getItems(pageNumber, pageSize, sortColumn, sortDirection, category).subscribe(response => {

      this.updateCountFromResponse(response);
      this.updateItemsFromResponse(response);
      this.assignNewDataSource();
      this.hideSpinnerToggle();

    });

  }

  updateItemsFromResponse(response: HttpResponse<any>) {
    this.items = this.servHttpUtils.getBodyFromHttpResponse(response);
  }
  updateCountFromResponse(response: HttpResponse<any>) {
    this.itemsCount = this.servHttpUtils.getCountFromHttpResponse(response);

  }

  onItemButtonToggleChange(event: MatButtonToggleChange) {
    console.log(event);
    console.log(Object.values(EnumInventoryItemCategory));

    this.paginator.firstPage();
    if (Object.values(EnumInventoryItemCategory).includes(event.value)) {
      this.category = event.value;
    }
    else {
      this.category = null;
    }

    this.getItems(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.category);
  }

  assignNewDataSource() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.items);
    this.updateDataSourceSort();
  }

  updateDataSourceSort() {

    this.dataSource.sort = this.sort;
  }

  onSortingChange() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe((newSortAndDirection: any) => {
      this.paginator.firstPage();
      this.getItems(0, this.paginator.pageSize, newSortAndDirection.active, newSortAndDirection.direction, this.category);

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
      this.getItems(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction, this.category);

    });
  }

  showSpinnerToggle() {
    this.showSpinner = true;
    this.cdr.detectChanges();
  }

  hideSpinnerToggle() {
    this.showSpinner = false;
  }

 
  
  isUserAdmin(){
    return this.authService.isUserAdmin();
  }

}
