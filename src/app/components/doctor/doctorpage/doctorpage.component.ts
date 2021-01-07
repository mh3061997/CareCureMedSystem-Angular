import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { DoctorAddNewDialogComponent} from 'src/app/components/doctor/doctorpage/doctor-add-new-dialog/doctor-add-new-dialog.component'
import { ResDoctor } from 'src/app/interfaces/res-doctor';

@Component({
  selector: 'app-doctorpage',
  templateUrl: './doctorpage.component.html',
  styleUrls: ['./doctorpage.component.css']
})
export class DoctorpageComponent implements OnInit {
  
  doctors:ResDoctor[];
  
  
  constructor(public dialogAddDoctor:MatDialog,private servDoctor:ServDoctorService) { 

    servDoctor.getDoctorsAll().subscribe(doctors =>{

      this.doctors = doctors;
    });
  }

  
  
  openNewDoctorDialog(){
    const dialogRef =  this.dialogAddDoctor.open(DoctorAddNewDialogComponent);
   
     dialogRef.afterClosed().subscribe(closed =>{
    
       this.servDoctor.getDoctorsAll().subscribe(doctors =>{
 
         this.doctors = doctors;
         });
 
     });
   
   }

  ngOnInit(): void {
  }

  
}



