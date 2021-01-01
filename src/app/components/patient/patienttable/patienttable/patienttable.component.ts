

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import {ResPatient} from 'src/app/interfaces/res-patient'

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
export class PatienttableComponent implements AfterViewInit {


  displayedColumns: string[] = ['code', 'dateSubscriped', 'usedAmount', 'remainingAmount'];
  displayedColumnsMedImage: string[] = ['code', 'image', 'type', 'dateAdded'];

  dataSource: MatTableDataSource<ResMembership>;
  medimagedatasource:MatTableDataSource<ResMedImage>;

  @ViewChild(MatPaginator) paginator2: MatPaginator;

  @ViewChild(MatSort) sort2: MatSort;

//   constructor(private patientservice:ServPatientService) {
//     // Create 100 users
//     const images = Array.from({length: 100}, (_, k) => this.createNewImage());

//     this.patientservice.getMedImages().subscribe(arr =>{
//       // Assign the data to the data source for the table to render
//     this.medimagedatasource = new MatTableDataSource(arr);
//     this.medimagedatasource.paginator = this.paginator2;
//     this.medimagedatasource.sort = this.sort2;
//   });

   

//     }
    
//      patientTry:ResPatient = {
//       code: 9,
//       name: "mohamشسيشسيشسيed",
//       gender: "male",
//       email: "mh@gmail.com",
//       mobile: "0111457920",
//       age: 22,
//       notes: "high hjghg pressure",
//       memberships:[],
//       appointments:[],
//       medImages:[]
// };

//   addpatientmedimage (){
//     const mi:ResMedImage={
//       code:21,
//       image:"sdfsdf",
//       type:"sonar",
//       dateAdded:new Date(2018,11,11)
//     };
//    // this.patientservice.addpatientmedimage(mi,this.patientTry);
//   }
  ngAfterViewInit() {
  
     // If the user changes the sort order, reset back to the first page.
    // this.sort2.sortChange.subscribe(() => this.paginator2.pageIndex = 0);
  }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }


// /** Builds and returns a new User. */
//  createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }
//  createNewImage():ResMedImage{
//   return {code:Math.floor(Math.random()*100),
//   image:"string",
//   type:"string",
//   dateAdded: new Date(2018, 11, 24, 10, 33, 30)};
// }

//  createNewMembership(id: number): ResMembership {

//   return {
//     code:Math.floor(Math.random()*100),
//     dateSubscriped:new  Date(2018, 11, 24, 10, 33, 30),
//     usedAmount:Math.floor(Math.random()*1000),
//     remainingAmount:Math.floor(Math.random()*1000),
//     patient:{  code:12,
//       name:"sdf",
//       gender:"string",
//       email:"string",
//       mobile:"string",
//       age:234,
//       notes:"string",
//       memberships:new Array(),
//       appointments:new Array(),
//       medImages:new Array()}
//   };
// }


//   clicker() {
//  // this.patientservice.getMedImages();
//   }

}
