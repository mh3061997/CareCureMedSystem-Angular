
import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import {ResDoctor} from 'src/app/interfaces/res-doctor'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styleUrls: ['./doctor-table.component.css']
})
export class DoctorTableComponent  implements AfterViewInit, OnChanges {

  
  @Input()
  doctors:ResDoctor[];



  
  displayedColumns: string[] = ['code', 'name', 'speciality','gender', 'email', 'mobile','age','price visit','price revisit',' '];

  dataSource: MatTableDataSource<ResDoctor>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cdr: ChangeDetectorRef,private router: Router, private route: ActivatedRoute){

  }
  
  ngAfterViewInit() {
  
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.doctors);
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

  goToDoctor(code:number){
    console.log(this.route);
    this.router.navigate([code.toString()],{relativeTo:this.route});
  }

  
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['doctors']) {
      this.dataSource = new MatTableDataSource(this.doctors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
}

}







 
   




