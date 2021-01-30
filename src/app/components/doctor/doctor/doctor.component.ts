import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { MatDialog } from '@angular/material/dialog';
import { DoctorUpdateInformationDialogComponent } from '../doctor/doctor-update-information-dialog/doctor-update-information-dialog.component';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { MatCalendar } from '@angular/material/datepicker/calendar';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  doctor: ResDoctor;
  doctorId: number;
  currentDate: Date = new Date();
  appointments: ResAppointment[];

  constructor(public dialogUpdateDoctorInformation: MatDialog,
    private currentRoute: ActivatedRoute,
    private servDoctor: ServDoctorService,
    public servUtils: ServUtilitiesService,
    public servAppointment: ServAppointmentService) {

    this.getDoctorCode();

    servDoctor.getDoctorByID(this.doctorId).subscribe(doctor => {

      this.doctor = doctor;
      this.appointments = this.doctor.appointments;
    });
  }

  private getDoctorCode() {
    this.doctorId = this.currentRoute.snapshot.params['id'];
  }





  openUpdateDoctorInformationDialog() {
    const dialogRef = this.dialogUpdateDoctorInformation.open(DoctorUpdateInformationDialogComponent, {
      data: {
        doctor: this.doctor
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(closed => {

      if (closed) {
        this.servDoctor.getDoctorByID(this.doctorId).subscribe(doctor => {

          this.doctor = doctor;
        });
      }

    });

  }

  onButtonToggleChange(event: MatButtonToggleChange) {
    // console.log(event);

    switch (event.value) {
      case 'Upcoming':
        this.servAppointment.getDoctorUpcomingAppointments(this.doctorId).subscribe(upcomingAppointments => {
          this.appointments = upcomingAppointments;
        });
        break;
      case 'Past':
        this.servAppointment.getDoctorPastAppointments(this.doctorId).subscribe(pastAppointments => {
          this.appointments = pastAppointments;
        });
        break;
      case 'All':
        this.servDoctor.getDoctorByID(this.doctorId).subscribe(doctor => {

          this.doctor = doctor;
          this.appointments = this.doctor.appointments;
        });
        break;
      case 'ByDate':
        this.servAppointment.getDoctorAppointmentsByDate(this.doctorId,this.currentDate).subscribe(dateAppointments => {
          this.appointments = dateAppointments;
        });
        break;
    }

  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    // console.log(event);

    if (event.value) {
      this.servAppointment.getDoctorAppointmentsByDate(this.doctorId,event.value).subscribe(dateAppointments => {
        this.appointments = dateAppointments;
      });
    }

  }

}


