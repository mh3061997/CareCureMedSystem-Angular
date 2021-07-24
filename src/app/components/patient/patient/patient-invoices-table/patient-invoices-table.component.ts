import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-patient-invoices-table',
  templateUrl: './patient-invoices-table.component.html',
  styleUrls: ['./patient-invoices-table.component.css']
})
export class PatientInvoicesTableComponent implements  AfterViewInit ,OnChanges {

  
  @Input()
  invoices:ResInvoice[];

  displayedColumns: string[] = ['code', 'dateCreated', 'totalDue','discount', 'status' ,'paymentMethod','userFinalizedBy',' '];

  dataSource: MatTableDataSource<ResInvoice>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cdr: ChangeDetectorRef,private router: Router, private route: ActivatedRoute,
    public servUtils:ServUtilitiesService){

  }
  
  ngAfterViewInit() {
  
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.invoices);
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

  goToInvoice(code:number){
    //console.log(this.route);
    this.router.navigate(['admin','invoice',code.toString()]);
  }

  
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['invoices']) {
      this.dataSource = new MatTableDataSource(this.invoices);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
}

}




