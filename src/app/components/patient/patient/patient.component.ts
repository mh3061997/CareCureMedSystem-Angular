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
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { PatientAddMedimageDialogComponent } from './patient-add-medimage-dialog/patient-add-medimage-dialog.component';
import { PatientAddOfficialdocDialogComponent } from './patient-add-officialdoc-dialog/patient-add-officialdoc-dialog.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  //icons
  faFileMedical=faFileMedical;
  faMicroscope=faMicroscope;
  faIdCard=faIdCard;
  faFlask=faFlask;

  //data members
  patient:ResPatient;
  patientId:number;

  medImagesLab:ResMedImage[]=[];
  medImagesRadiology:ResMedImage[]=[];
  medImagesPresc:ResMedImage[]=[];
  medImagesOfficial:ResMedImage[]=[];

  currentSelectedMedImageTab="Lab Tests"

  onTabChange(event:MatTabChangeEvent){
    this.currentSelectedMedImageTab=event.tab.textLabel;
  }


  constructor(public dialogAddMedImage:MatDialog,public dialogAddMembership:MatDialog,public dialogUpdatePatientInformation:MatDialog,private currentRoute:ActivatedRoute,private servPatient:ServPatientService) {

    this.getPatientCode();

    servPatient.getPatientByID(this.patientId).subscribe(patient =>{

    this.patient = patient;
    // console.log(this.patient);

     //generates 4 types of medimages arrays
      this.medImagesLab = this.patient.medImages.filter(medImage => medImage.type=="Lab");
      this.medImagesRadiology = this.patient.medImages.filter(medImage => medImage.type=="Radiology");
      this.medImagesOfficial = this.patient.medImages.filter(medImage => medImage.type=="Official");
      this.medImagesPresc = this.patient.medImages.filter(medImage => medImage.type=="Prescription");

      // console.log(this.medImagesLab);
    

    });

    
  }

  private getPatientCode(){
  this.patientId = this.currentRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  
  openAddMedImageDialog(){

    const dialogRef =  this.dialogAddMedImage.open(PatientAddMedimageDialogComponent,{
      data:{
        patient:this.patient,
        medImageType:this.currentSelectedMedImageTab
      },
      disableClose:true
    });
  
    dialogRef.afterClosed().subscribe(closed =>{
   
if(closed){
  this.servPatient.getPatientByID(this.patientId).subscribe(patient =>{

    this.patient = patient;
    this.medImagesLab = this.patient.medImages.filter(medImage => medImage.type=="Lab");
    this.medImagesRadiology = this.patient.medImages.filter(medImage => medImage.type=="Radiology");
    this.medImagesOfficial = this.patient.medImages.filter(medImage => medImage.type=="Official");
    this.medImagesPresc = this.patient.medImages.filter(medImage => medImage.type=="Prescription");

    });
}

    });

  }
 
  openAddOfficialImageDialog(){

    const dialogRef =  this.dialogAddMedImage.open(PatientAddOfficialdocDialogComponent,{
      data:{
        patient:this.patient,
        medImageType:this.currentSelectedMedImageTab
      },
      disableClose:true
    });
  
    dialogRef.afterClosed().subscribe(closed =>{
   
if(closed){
  this.servPatient.getPatientByID(this.patientId).subscribe(patient =>{

    this.patient = patient;
    this.medImagesLab = this.patient.medImages.filter(medImage => medImage.type=="Lab");
    this.medImagesRadiology = this.patient.medImages.filter(medImage => medImage.type=="Radiology");
    this.medImagesOfficial = this.patient.medImages.filter(medImage => medImage.type=="Official");
    this.medImagesPresc = this.patient.medImages.filter(medImage => medImage.type=="Prescription");

    });
}

    });

  }
  openUpdatePatientInformationDialog(){
   const dialogRef =  this.dialogUpdatePatientInformation.open(PatientUpdateInformationDialogComponent,{
      data:{
        patient:this.patient
      },
      disableClose:true
    });
  
    dialogRef.afterClosed().subscribe(closed =>{
   
     if(closed){
      this.servPatient.getPatientByID(this.patientId).subscribe(patient =>{

        this.patient = patient;
        });
     }

    });
  
  }

  openMembershipDialog(){
    const dialogRef =  this.dialogAddMembership.open(PatientAddMembershipDialogComponent,{
       data:{
         patient:this.patient
       },
       disableClose:true
     });
   
     dialogRef.afterClosed().subscribe(closed =>{
    
     if(closed){
      this.servPatient.getPatientByID(this.patientId).subscribe(patient =>{
 
        this.patient = patient;
        });

     }
     });
   
   }
  

}
