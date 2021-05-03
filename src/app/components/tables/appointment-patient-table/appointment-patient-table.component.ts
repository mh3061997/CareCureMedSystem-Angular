import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import {ResPatient} from 'src/app/interfaces/res-patient'
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
@Component({
  selector: 'app-appointment-patient-table',
  templateUrl: './appointment-patient-table.component.html',
  styleUrls: ['./appointment-patient-table.component.css']
})
export class AppointmentPatientTableComponent implements AfterViewInit ,OnChanges{


  @Input()
  appointments:ResAppointment[];


  constructor(private cdr: ChangeDetectorRef,private router: Router, private route: ActivatedRoute,
    public servUtils:ServUtilitiesService){

   }

  displayedColumns: string[] = ['code', 'speciality', 'dateCreated', 'dateToVisit','type','notes','Doctor Name',' '];

  dataSource: MatTableDataSource<ResAppointment>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;



  ngAfterViewInit() {
    console.log('apps',this.appointments);
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.appointments);
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

  
  goToAppointment(code:number){
    console.log(this.route);
    this.router.navigate(['admin','appointment',code.toString()]);
  }

  
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['appointments']) {
      this.dataSource = new MatTableDataSource(this.appointments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

}

}