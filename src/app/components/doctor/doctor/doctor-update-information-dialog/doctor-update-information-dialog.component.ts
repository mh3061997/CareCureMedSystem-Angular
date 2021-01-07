
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ResDoctor} from 'src/app/interfaces/res-doctor';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';

@Component({
  selector: 'app-doctor-update-information-dialog',
  templateUrl: './doctor-update-information-dialog.component.html',
  styleUrls: ['./doctor-update-information-dialog.component.css']
})
export class DoctorUpdateInformationDialogComponent implements OnInit {

  doctor:ResDoctor;

  @ViewChild('updateInfoForm', { static: false }) updateInfoForm: NgForm;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{doctor:ResDoctor},
              public dialogRef: MatDialogRef<DoctorUpdateInformationDialogComponent>,
              private servDoctor:ServDoctorService) {
                
    this.doctor=data.doctor;
  }
              
  updateDoctorInformation(updatedDoctor:ResDoctor){
    
    console.log(this.updateInfoForm);

    this.servDoctor.updateDoctor(updatedDoctor).subscribe(response =>{

      this.dialogRef.close();

    });
  }
   
   

  onUpdateInfoSubmit(){
    this.doctor.name=this.updateInfoForm.value.name;
    this.doctor.age=this.updateInfoForm.value.age;
    this.doctor.gender=this.updateInfoForm.value.gender;
    this.doctor.email=this.updateInfoForm.value.email;
    this.doctor.mobile=this.updateInfoForm.value.mobile;
    this.doctor.speciality=this.updateInfoForm.value.speciality;

    this.updateDoctorInformation(this.doctor);
  }

  ngOnInit(): void {
    
  }


}

