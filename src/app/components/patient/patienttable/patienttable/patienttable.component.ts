

import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import { ResPatient } from 'src/app/interfaces/res-patient'
import { ActivatedRoute, Router } from '@angular/router';
import { ServHttpUtilsService } from 'src/app/services/serv-http-utils.service';
import { HttpResponse } from '@angular/common/http';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


@Component({
  selector: 'app-patienttable',
  templateUrl: './patienttable.component.html',
  styleUrls: ['./patienttable.component.css']

})
export class PatienttableComponent implements AfterViewInit {

  patients: ResPatient[];


  displayedColumns: string[] = [
    'code',
    'name',
    'gender',
    'email',
    'mobile',
    'age',
    ' '];

  dataSource: MatTableDataSource<ResPatient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  paginatorPageSize: number = 10;
  patientsCount: number;

  @ViewChild(MatSort) sort: MatSort;

  showSpinner = false;
  constructor(
    private servPatient: ServPatientService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private servHttpUtils: ServHttpUtilsService,
    ) {
      this.servPatient.getPatientsSubject().subscribe(() => {

      this.getPatients(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
    });
  }

  getPatients(pageNumber: number, pageSize: number, sortColumn: string, sortDirection: string) {
 
     this.showSpinnerToggle();
     this.servPatient.getPatientsAll(pageNumber, pageSize, sortColumn, sortDirection).subscribe(response => {
 
       this.updateCountFromResponse(response);
       this.updatePatientsFromResponse(response);
       this.assignNewDataSource();
       this.hideSpinnerToggle();
 
     });
 
   }

   updatePatientsFromResponse(response: HttpResponse<any>) {
    this.patients = this.servHttpUtils.getBodyFromHttpResponse(response);
  }
  updateCountFromResponse(response: HttpResponse<any>) {
    this.patientsCount = this.servHttpUtils.getCountFromHttpResponse(response);

  }
  
  assignNewDataSource() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.patients);
    this.updateDataSourceSort();
  }

  updateDataSourceSort() {

    this.dataSource.sort = this.sort;
  }
  
  onSortingChange() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe((newSortAndDirection: any) => {

      this.paginator.firstPage();
      this.getPatients(0, this.paginator.pageSize, newSortAndDirection.active, newSortAndDirection.direction);

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
      this.getPatients(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);

    });
  }

  
  showSpinnerToggle() {
    this.showSpinner = true;
    this.cdr.detectChanges();
  }

  hideSpinnerToggle() {
    this.showSpinner = false;
  }

  ngAfterViewInit() {

    this.getPatients(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
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

  goToPatient(code: number) {
    console.log(this.route);
    this.router.navigate([code.toString()], { relativeTo: this.route });
  }


}










