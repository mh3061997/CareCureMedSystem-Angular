import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ResUserDtoRegister } from 'src/app/interfaces/res-user-dto-register';
import { ServUsersService } from 'src/app/services/serv-users.service';

@Component({
  selector: 'app-user-add-new-dialog',
  templateUrl: './user-add-new-dialog.component.html',
  styleUrls: ['./user-add-new-dialog.component.css']
})
export class UserAddNewDialogComponent implements OnInit {


  isPatientChecked = false;
  isDoctorChecked = false;
  isUsernameTaken=false;

  patient: ResPatient | null;
  doctor: ResDoctor | null;
  patientLookUpMessage: string |null;
  doctorLookUpMessage: string | null;

  @ViewChild('newUserForm', { static: false }) newUserForm: NgForm;

  constructor(
    public dialogRef: MatDialogRef<UserAddNewDialogComponent>,
    private servUser: ServUsersService) {
    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
    });
  }

  ngOnInit(): void {
  }


  checkPatientAssociation(mobile: string) {

    this.servUser.isPatientAssociatedWithUser(mobile).subscribe(response => {

      //Accepted
      if (response.status == 202 && response.body) {

        this.patient = response.body;

        if (this.patient) {
          this.isPatientChecked = true;
        }
        //No patient with this number
      } else if (response.status == 203) {
        this.patientLookUpMessage = response!.body!.message!;
        this.isPatientChecked = false;
      }
      //patient already associated
      else if (response.status == 226) {
        this.patientLookUpMessage = response!.body!.message!;
        this.isPatientChecked = false;
      }

    });


  }


  checkDoctorAssociation(mobile: string) {

    this.servUser.isDoctorAssociatedWithUser(mobile).subscribe(response => {

      //Accepted
      if (response.status == 202 && response.body) {

        this.doctor = response.body;

        if (this.doctor) {
          this.isDoctorChecked = true;
        }
        //No patient with this number
      } else if (response.status == 203) {
        this.doctorLookUpMessage = response!.body!.message!;
        this.isDoctorChecked = false;
      }
      //patient already associated
      else if (response.status == 226) {
        this.doctorLookUpMessage = response!.body!.message!;
        this.isDoctorChecked = false;
      }

    });


  }

  onNewUserSubmit() {
    const newUser: ResUserDtoRegister = {

      username: this.newUserForm.value.username,
      password: this.newUserForm.value.password,
      roles: [{ id: 0, name: this.newUserForm.value.role }]
    }

    if (this.isPatientChecked && this.newUserForm.value.role == 'PATIENT' && this.patient) {
      newUser.patient = this.patient;

      console.log(newUser);
      this.servUser.registerUser(newUser).subscribe((response) => {
        if(response.status==226){
          this.isUsernameTaken=true;
          console.log(this.isUsernameTaken);
          
        }else
        this.dialogRef.close(true);
      });

    } else if (this.isDoctorChecked && this.newUserForm.value.role == 'DOCTOR'  && this.doctor) {
      newUser.doctor = this.doctor;

      console.log(newUser);
      this.servUser.registerUser(newUser).subscribe((response) => {
        if(response.status==226){
          this.isUsernameTaken=true;
        }else
        this.dialogRef.close(true);
      });
    } else if(this.newUserForm.value.role == 'ADMIN' || this.newUserForm.value.role == 'RECEPTIONIST') {
      this.servUser.registerUser(newUser).subscribe((response) => {
        if(response.status==226){
          this.isUsernameTaken=true;
        }else
        this.dialogRef.close(true);
      });
    }

 }

  resetChoices(){
    console.log("resseting");
    
    this.isDoctorChecked=false;
    this.isPatientChecked=false;
    this.patient=null;
    this.doctor=null;
    this.patientLookUpMessage=null;
    this.doctorLookUpMessage=null;
  }

}



