import { Component, OnInit, ViewChild } from '@angular/core';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {

  //@ViewChild('newPatientForm', { static: false }) newPatientForm: NgForm;

  constructor(
  private servPatient:ServPatientService) {
   
  }

  ngOnInit(): void {
  }

  
// onNewPatientSubmit(){
//   const newPatient:ResPatient ={
//     code:0, //code must ALWAYS be 0 when inserting bec. it wont insert if code is existing and 
//     //it starts from 1 so 0 always available
//     name:this.newPatientForm.value.name,
//     gender:this.newPatientForm.value.gender,
//     age:this.newPatientForm.value.age,
//     mobile:this.newPatientForm.value.mobile,
//     email:this.newPatientForm.value.email,
//     totalDebt:0,
//     notes:"",
//     appointments:[],
//     medImages:[],
//     memberships:[]
//   }
  
//   this.servPatient.addPatient(newPatient).subscribe(response =>{
//   })
// }
}
