import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { PathService } from 'src/app/services/path.service';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { AppointmentUpdateInformationDialogComponent } from './appointment-update-information-dialog/appointment-update-information-dialog.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  appointment:ResAppointment;
  appointmentId:number;

  patient:ResPatient;
  doctor:ResDoctor;
  
  constructor(public dialogAddMembership:MatDialog,
    public dialogUpdateAppointmentInformation:MatDialog,
    private currentRoute:ActivatedRoute,
    private servAppointment:ServAppointmentService,
    private router: Router,
    public servUtils:ServUtilitiesService) {

    this.getAppointmentCode();

    servAppointment.getAppointmentByID(this.appointmentId).subscribe(appointment =>{

    this.appointment = appointment;
    this.patient = appointment.patient;
    this.doctor = appointment.doctor;

    console.log(this.appointment);
    });
  }

  private getAppointmentCode(){
  this.appointmentId = this.currentRoute.snapshot.params['id'];
  }

  
  goToDoctor(){
   // console.log(this.route);
    this.router.navigate(['doctor',this.doctor.code.toString()]);
  }

  
  goToMedicalOps(){
    this.router.navigate(['appointment',this.appointment.code.toString(),'medops']);
  }

  goToPatient(){
    //console.log(this.route);
    this.router.navigate(['patient',this.patient.code.toString()]);
  }
  ngOnInit(): void {
  }

  
  openUpdateAppointmentInformationDialog(){
    const dialogRef =  this.dialogUpdateAppointmentInformation.open(AppointmentUpdateInformationDialogComponent,{
       data:{
         appointment:this.appointment
       },
       disableClose:true
     });
   
     dialogRef.afterClosed().subscribe(closed =>{
    
     if(closed){
      this.servAppointment.getAppointmentByID(this.appointmentId).subscribe(appointment =>{
 
        this.appointment = appointment;
        });

     }
     });
   
   }
}
