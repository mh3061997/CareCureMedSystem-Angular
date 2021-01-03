import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import {MatDialog} from '@angular/material/dialog';
import { DoctorUpdateInformationDialogComponent } from '../doctor/doctor-update-information-dialog/doctor-update-information-dialog.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent  {

  Doctor:ResDoctor;
  DoctorId:number;

 

  constructor(public dialogUpdateDoctorInformation:MatDialog,private currentRoute:ActivatedRoute,private servDoctor:ServDoctorService) {

    this.getDoctorCode();

    servDoctor.getDoctorByID(this.DoctorId).subscribe(Doctor =>{

    this.Doctor = Doctor;

  });
  }

  private getDoctorCode(){
  this.DoctorId = this.currentRoute.snapshot.params['id'];
  }

 


 
  openUpdateDoctorInformationDialog(){
   const dialogRef =  this.dialogUpdateDoctorInformation.open(DoctorUpdateInformationDialogComponent,{
      data:{
        Doctor:this.Doctor
      }
    });
  
    dialogRef.afterClosed().subscribe(closed =>{
   
      this.servDoctor.getDoctorByID(this.DoctorId).subscribe(Doctor =>{

        this.Doctor = Doctor;
        });

    });
  
  }

}


