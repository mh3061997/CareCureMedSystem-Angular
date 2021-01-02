import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResMembership } from 'src/app/interfaces/res-membership';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import {MatDialog} from '@angular/material/dialog';
import { PatientAddMembershipDialogComponent } from '../patient-add-membership-dialog/patient-add-membership-dialog.component';
import { PatientUpdateInformationDialogComponent } from '../patient-update-information-dialog/patient-update-information-dialog.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  
  patient:ResPatient;
  patientId:number;


  
  constructor(public dialogAddMembership:MatDialog,public dialogUpdatePatientInformation:MatDialog,private currentRoute:ActivatedRoute,private servPatient:ServPatientService) {

    this.getPatientCode();

    servPatient.getPatientByID(this.patientId).subscribe(patient =>{

    this.patient = patient;
    console.log(this.patient);
    });
  }

  private getPatientCode(){
  this.patientId = this.currentRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }


 
  openUpdatePatientInformationDialog(){
   const dialogRef =  this.dialogUpdatePatientInformation.open(PatientUpdateInformationDialogComponent,{
      data:{
        patient:this.patient
      }
    });
  
    dialogRef.afterClosed().subscribe(closed =>{
   
      this.servPatient.getPatientByID(this.patientId).subscribe(patient =>{

        this.patient = patient;
        });

    });
  
  }

  openMembershipDialog(){
    const dialogRef =  this.dialogAddMembership.open(PatientAddMembershipDialogComponent,{
       data:{
         patient:this.patient
       }
     });
   
     dialogRef.afterClosed().subscribe(closed =>{
    
       this.servPatient.getPatientByID(this.patientId).subscribe(patient =>{
 
         this.patient = patient;
         });
 
     });
   
   }
  

}
