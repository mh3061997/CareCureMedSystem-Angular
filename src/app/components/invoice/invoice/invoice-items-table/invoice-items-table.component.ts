import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ResPatient} from 'src/app/interfaces/res-patient'
import { ActivatedRoute, Router } from '@angular/router';
import { ResInvoiceItem } from 'src/app/interfaces/res-invoice-item';
import { ServInvoiceItemService } from 'src/app/services/serv-invoice-item.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-invoice-items-table',
  templateUrl: './invoice-items-table.component.html',
  styleUrls: ['./invoice-items-table.component.css']
})
export class InvoiceItemsTableComponent  implements AfterViewInit, OnChanges  {

 
  @Input()
  invoiceItems:ResInvoiceItem[];
  @Input()
  invoiceStatus:string;
  @Output()
  itemRemovedEvent =new EventEmitter();

  displayedColumns: string[] = ['code', 'name', 'price',' '];

  dataSource: MatTableDataSource<ResInvoiceItem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cdr: ChangeDetectorRef,
    public servInvoiceItem:ServInvoiceItemService){
      
  }
  
  deleteInvoiceItem(code:number){
    this.servInvoiceItem.deleteInvoiceItem(code).subscribe(res=>{
      this.itemRemovedEvent.emit();
    });
  }

  ngAfterViewInit() {
  
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.invoiceItems);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
     // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.cdr.detectChanges();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['invoiceItems']) {
      this.dataSource = new MatTableDataSource(this.invoiceItems);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
}

}







 
   




