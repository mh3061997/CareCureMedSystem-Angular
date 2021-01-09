import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ResPatient} from 'src/app/interfaces/res-patient';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-patient-update-information-dialog',
  templateUrl: './patient-update-information-dialog.component.html',
  styleUrls: ['./patient-update-information-dialog.component.css']
})
export class PatientUpdateInformationDialogComponent implements OnInit {
  
  patient:ResPatient;
  @ViewChild('updateInfoForm', { static: false }) updateInfoForm: NgForm;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{patient:ResPatient},
              public dialogRef: MatDialogRef<PatientUpdateInformationDialogComponent>,
              private servPatient:ServPatientService) {

    this.patient=data.patient;
  }
              
  updatePatientInformation(updatedPatient:ResPatient){
    
    console.log(this.updateInfoForm);

    this.servPatient.updatePatient(updatedPatient).subscribe(response =>{

      this.dialogRef.close();

    });
  }
   
   

  onUpdateInfoSubmit(){
    this.patient.name=this.updateInfoForm.value.name;
    this.patient.age=this.updateInfoForm.value.age;
    this.patient.gender=this.updateInfoForm.value.gender;
    this.patient.email=this.updateInfoForm.value.email;
    this.patient.mobile=this.updateInfoForm.value.mobile;
    
    console.log(this.patient);
    this.updatePatientInformation(this.patient);
  }

  ngOnInit(): void {
    
  }

}


 
