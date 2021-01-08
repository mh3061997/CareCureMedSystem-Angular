import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-doctor-add-new-dialog',
  templateUrl: './doctor-add-new-dialog.component.html',
  styleUrls: ['./doctor-add-new-dialog.component.css']
})
export class DoctorAddNewDialogComponent implements OnInit {

 
  @ViewChild('newDoctorForm', { static: false }) newDoctorForm: NgForm;
  specialities:string[];

  constructor(
  public dialogRef: MatDialogRef<DoctorAddNewDialogComponent>,
  private servDoctor:ServDoctorService,
  private servUtils:ServUtilitiesService) {

    this.specialities = servUtils.specialities;
  }

  ngOnInit(): void {
  }

  
onNewDoctorSubmit(){
  const newDoctor:ResDoctor ={
    code:0, //code must ALWAYS be 0 when inserting bec. it wont insert if code is existing and 
    //it starts from 1 so 0 always available
    name:this.newDoctorForm.value.name,
    gender:this.newDoctorForm.value.gender,
    age:this.newDoctorForm.value.age,
    mobile:this.newDoctorForm.value.mobile,
    email:this.newDoctorForm.value.email,
    speciality:this.newDoctorForm.value.speciality,
    appointments:[]
  }
  
  this.servDoctor.addDoctor(newDoctor).subscribe(response =>{
    this.dialogRef.close();
  })
}

}



 