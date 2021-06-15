import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResInventoryItem } from 'src/app/interfaces/inventory/res-inventory-item';
import { ServInventoryItemService } from 'src/app/services/serv-inventory-item.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

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

  constructor(
    private servInventoryItem: ServInventoryItemService,
    public servUtils: ServUtilitiesService) { }

  ngAfterViewInit() {

    this.getItems(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
    this.onSortingChange();
    this.onPaginationChange();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getItems(pageNumber: number, pageSize: number, sortColumn: string, sortDirection: string) {

    this.servInventoryItem.getItems(pageNumber, pageSize, sortColumn, sortDirection).subscribe(response => {

      let count = response.headers.get("X-Total-Count");
      this.itemsCount = count ? parseInt(count) : 0;
      this.items = response!.body!;
      this.assignNewDataSource();

    });

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
      this.getItems(0, this.paginator.pageSize, newSortAndDirection.active, newSortAndDirection.direction);

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
      this.getItems(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);

    });
  }

}
