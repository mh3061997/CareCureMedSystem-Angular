import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ResUserDtoRegister } from 'src/app/interfaces/res-user-dto-register';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import { ServUsersService } from 'src/app/services/serv-users.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {

  isUsernameTaken=false;
  isPatientExist: boolean;
  patientLookUpMessage:string;
  showSpinner:boolean=false;
  @ViewChild('newPatientForm', { static: false }) newPatientForm: NgForm;

  constructor(
  private servPatient:ServPatientService,private servUser:ServUsersService,private router:Router,private authService:AuthService) {
   
  }

  ngOnInit(): void {
  }

  
onNewPatientSubmit():Observable<any>{
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
  
 return this.servPatient.addPatient(newPatient);
}



checkPatientAssociation(mobile: string) {
console.log(mobile);

  this.servUser.isPatientAssociatedWithUser(mobile).subscribe(response => {

    //Accepted
    if (response.status == 202 && response.body) {

      let patient:ResPatient = response.body;

      //patient exists but without account
      if (patient) {
        this.isPatientExist = false;
        this.registerUser(patient);
      }
      //New Patient
    } else if (response.status == 203) {
     
      this.isPatientExist=false;
      this.onNewPatientSubmit().subscribe((newPatient)=>{
      this.registerUser(newPatient);
      });
    }
    //patient already associated
    else if (response.status == 226) {
      this.patientLookUpMessage = "An account already exists for this patient";
      this.isPatientExist = true;
    }

  });


}

createNewUserDTO(patient:ResPatient):ResUserDtoRegister {

  const newUser: ResUserDtoRegister = {

    username: this.newPatientForm.value.username,
    password: this.newPatientForm.value.password,
    roles: [{ id: 0, name: "PATIENT" }],
    patient:patient
  }
return newUser;

}


registerUser(patient:ResPatient){
  this.showSpinner = true;
  const newUser:ResUserDtoRegister = this.createNewUserDTO(patient);
  this.servUser.registerPatientUser(newUser).subscribe((response) => {

    if(response.status==226){
      this.isUsernameTaken=true;
      this.patientLookUpMessage="Username Taken ! please try a different username"
      this.showSpinner = false;
    }else


   this.authService.authenticate(this.newPatientForm.value.username,this.newPatientForm.value.password).subscribe(
     success => {

       this.showSpinner = false;
       this.router.navigate(['history']);
     },
     error => {

       this.patientLookUpMessage = error.error.message;
       this.showSpinner = false;

     }
   
   );

  });
 }
}
