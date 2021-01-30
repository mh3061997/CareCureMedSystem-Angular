import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ServMedImageService } from 'src/app/services/serv-medimage.service';
import {ResMedImage} from 'src/app/interfaces/res-med-image'
import { ActivatedRoute, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ImageFullscreenDialogComponent } from './image-fullscreen-dialog/image-fullscreen-dialog.component';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-patient-medimages-table',
  templateUrl: './patient-medimages-table.component.html',
  styleUrls: ['./patient-medimages-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PatientMedimagesTableComponent implements AfterViewInit, OnChanges  {
 

  @Input()
  medImages:ResMedImage[];

 
    
  displayedColumns: string[] = ['code',"dateAdded","dateMade", 'subType', 'organ'];
  expandedElement: ResMedImage | null;
  dataSource: MatTableDataSource<ResMedImage>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cdr: ChangeDetectorRef,public dialogImageFullScreen:MatDialog,
    public servUtils:ServUtilitiesService){

  }
  
  ngAfterViewInit() {
  
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.medImages);
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
    if (changes['medImages']) {
      this.dataSource = new MatTableDataSource(this.medImages);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
}


openImageFullScreenDialog(image:string){
  const dialogRef =  this.dialogImageFullScreen.open(ImageFullscreenDialogComponent,{
     data:{
       image:image
     }
   });

 }

}




 
   




