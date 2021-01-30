
import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ResPackageBase } from 'src/app/interfaces/res-package-base';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-package-base-table',
  templateUrl: './package-base-table.component.html',
  styleUrls: ['./package-base-table.component.css']
})

export class PackageBaseTableComponent  implements AfterViewInit, OnChanges {

  @Input('packages')
  packages:ResPackageBase[];




  displayedColumns: string[] = ['code', 'name', 'dateCreated', 'dateExpired', 'status','price','unitTotal','type',' '];

  dataSource: MatTableDataSource<ResPackageBase>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cdr: ChangeDetectorRef,private router: Router,
     private route: ActivatedRoute,
     public servUtils:ServUtilitiesService){

  }
  
  ngAfterViewInit() {
  
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.packages);
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

  goToPackageBase(code:number){
    console.log(this.route);
    this.router.navigate([code.toString()],{relativeTo:this.route});
  }

  
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['packages']) {
      this.dataSource = new MatTableDataSource(this.packages);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
}

}




  
 
 




 
   




