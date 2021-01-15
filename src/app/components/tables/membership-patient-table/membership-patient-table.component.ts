import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-membership-patient-table',
  templateUrl: './membership-patient-table.component.html',
  styleUrls: ['./membership-patient-table.component.css']
})
export class MembershipPatientTableComponent implements AfterViewInit ,OnChanges{

  @Input()
  memberships:ResMembership[];

  constructor(private cdr: ChangeDetectorRef,
    public servUtils:ServUtilitiesService) {
        
     
   }

 
   
  displayedColumns: string[] = ['code', 'Date of Subscription', 'Amount Used', 'Remaining Amount','Package Code','Package Type','Package Total','Price'];

  dataSource: MatTableDataSource<ResMembership>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;



  ngAfterViewInit() {
    console.log('apps',this.memberships);
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.memberships);
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
    if (changes['memberships']) {
      this.dataSource = new MatTableDataSource(this.memberships);
    }
}
}

