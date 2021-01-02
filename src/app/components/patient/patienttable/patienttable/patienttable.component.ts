

import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import {ResPatient} from 'src/app/interfaces/res-patient'
import { ActivatedRoute, Router } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

  @Component({
    selector: 'app-patienttable',
    templateUrl: './patienttable.component.html',
    styleUrls: ['./patienttable.component.css']

})
export class PatienttableComponent implements AfterViewInit, OnChanges {

  
  @Input()
  patients:ResPatient[];



  
  displayedColumns: string[] = ['code', 'name', 'gender', 'email', 'mobile','age',' '];

  dataSource: MatTableDataSource<ResPatient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cdr: ChangeDetectorRef,private router: Router, private route: ActivatedRoute){

  }
  
  ngAfterViewInit() {
  
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.patients);
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

  goToPatient(code:number){
    console.log(this.route);
    this.router.navigate([code.toString()],{relativeTo:this.route});
  }

  
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['patients']) {
      this.dataSource = new MatTableDataSource(this.patients);
    }
}
}




 
   




