import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import {MatDialog} from '@angular/material/dialog';
import { DoctorUpdateInformationDialogComponent } from '../doctor/doctor-update-information-dialog/doctor-update-information-dialog.component';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { MatCalendar } from '@angular/material/datepicker/calendar';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent  {

  doctor:ResDoctor;
  doctorId:number;
  
  constructor(public dialogUpdateDoctorInformation:MatDialog,
    private currentRoute:ActivatedRoute,
    private servDoctor:ServDoctorService,
    public servUtils:ServUtilitiesService) {

    this.getDoctorCode();

    servDoctor.getDoctorByID(this.doctorId).subscribe(doctor =>{

    this.doctor = doctor;

  });
  }

  private getDoctorCode(){
  this.doctorId = this.currentRoute.snapshot.params['id'];
  }

 


 
  openUpdateDoctorInformationDialog(){
   const dialogRef =  this.dialogUpdateDoctorInformation.open(DoctorUpdateInformationDialogComponent,{
      data:{
        doctor:this.doctor
      },
      disableClose:true
    });
  
    dialogRef.afterClosed().subscribe(closed =>{
   
     if(closed) {
      this.servDoctor.getDoctorByID(this.doctorId).subscribe(doctor =>{

        this.doctor = doctor;
        });
     }

    });
  
  }

}


