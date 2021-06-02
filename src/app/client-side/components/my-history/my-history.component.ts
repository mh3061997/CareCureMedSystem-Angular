import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PatientAddMedimageDialogComponent } from 'src/app/components/patient/patient/patient-add-medimage-dialog/patient-add-medimage-dialog.component';
import { PatientAddOfficialdocDialogComponent } from 'src/app/components/patient/patient/patient-add-officialdoc-dialog/patient-add-officialdoc-dialog.component';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { faFileMedical } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css']
})
export class MyHistoryComponent implements OnInit {

   //icons
   faFileMedical=faFileMedical;
   faMicroscope=faMicroscope;
   faIdCard=faIdCard;
   faFlask=faFlask;

  patient:ResPatient;
  patientCode:number;
  medImagesLab:ResMedImage[]=[];
  medImagesRadiology:ResMedImage[]=[];
  medImagesPresc:ResMedImage[]=[];
  medImagesOfficial:ResMedImage[]=[];
  currentSelectedMedImageTab="Lab Tests"
  
  onTabChange(event:MatTabChangeEvent){
    this.currentSelectedMedImageTab=event.tab.textLabel;
  }
  constructor(public dialogAddMedImage:MatDialog,private servPatient:ServPatientService,private authService:AuthService,public servUtils:ServUtilitiesService) {

      this.patientCode = authService.getLoggedInPatientCode();

    if(this.patientCode){
      
      
      this.servPatient.getPatientByID(this.patientCode).subscribe(patient =>{
        this.patient = patient;
        //generates 4 types of medimages arrays
      this.medImagesLab = this.patient.medImages.filter(medImage => medImage.type=="Lab");
      this.medImagesRadiology = this.patient.medImages.filter(medImage => medImage.type=="Radiology");
      this.medImagesOfficial = this.patient.medImages.filter(medImage => medImage.type=="Official");
      this.medImagesPresc = this.patient.medImages.filter(medImage => medImage.type=="Prescription");

      })
    }
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
  this.servPatient.getPatientByID(this.patientCode).subscribe(patient =>{

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
  this.servPatient.getPatientByID(this.patientCode).subscribe(patient =>{

    this.patient = patient;
    this.medImagesLab = this.patient.medImages.filter(medImage => medImage.type=="Lab");
    this.medImagesRadiology = this.patient.medImages.filter(medImage => medImage.type=="Radiology");
    this.medImagesOfficial = this.patient.medImages.filter(medImage => medImage.type=="Official");
    this.medImagesPresc = this.patient.medImages.filter(medImage => medImage.type=="Prescription");

    });
}

    });

  }
}
