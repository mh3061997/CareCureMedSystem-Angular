import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-patient-add-new-dialog',
  templateUrl: './patient-add-new-dialog.component.html',
  styleUrls: ['./patient-add-new-dialog.component.css']
})
export class PatientAddNewDialogComponent implements OnInit {

  @ViewChild('newPatientForm', { static: false }) newPatientForm: NgForm;

  constructor(
  public dialogRef: MatDialogRef<PatientAddNewDialogComponent>,
  private servPatient:ServPatientService) {}

  ngOnInit(): void {
  }

  
onNewPatientSubmit(){
  const newPatient:ResPatient ={
    code:0, //code must ALWAYS be 0 when inserting bec. it wont insert if code is existing and 
    //it starts from 1 so 0 always available
    name:this.newPatientForm.value.name,
    gender:this.newPatientForm.value.gender,
    age:this.newPatientForm.value.age,
    mobile:this.newPatientForm.value.mobile,
    email:this.newPatientForm.value.email,
    totalDebt:0,
    notes:"",
    appointments:[],
    medImages:[],
    memberships:[]
  }
  
  this.servPatient.addPatient(newPatient).subscribe(response =>{
    this.dialogRef.close();
  })
}

}
 