
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { AppointmentAddNewDialogComponent } from 'src/app/components/appointment/appointmentpage/appointment-add-new-dialog/appointment-add-new-dialog.component'
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-appointmentpage',
  templateUrl: './appointmentpage.component.html',
  styleUrls: ['./appointmentpage.component.css']
})
export class AppointmentpageComponent implements OnInit {

  appointments: ResAppointment[];



  currentDate: Date = new Date();


  constructor(public dialogAddAppointment: MatDialog, private servAppointment: ServAppointmentService) {

    servAppointment.getAppointmentsUpcoming().subscribe(appointments => {

      this.appointments = appointments;

    });
  }

  ngOnInit(): void {
  }


  openNewAppointmentDialog() {
    const dialogRef = this.dialogAddAppointment.open(AppointmentAddNewDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(closed => {

      if (closed) {
        this.servAppointment.getAppointmentsAll().subscribe(appointmentsarr => {

          this.appointments = appointmentsarr;
          console.log("i updated");
        });
      }

    });

  }

  onButtonToggleChange(event: MatButtonToggleChange) {
   // console.log(event);

    switch (event.value) {
      case 'Upcoming':
        this.servAppointment.getAppointmentsUpcoming().subscribe(upcomingAppointments => {
          this.appointments = upcomingAppointments;
        });
        break;
      case 'Past':
        this.servAppointment.getAppointmentsPast().subscribe(pastAppointments => {
          this.appointments = pastAppointments;
        });
        break;
      case 'All':
        this.servAppointment.getAppointmentsAll().subscribe(appointments => {
          this.appointments = appointments;
        });
        break;
      case 'ByDate':
        this.servAppointment.getAppointmentsByDate(this.currentDate).subscribe(dateAppointments => {
          this.appointments = dateAppointments;
        });
        break;
    }

  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
   // console.log(event);

    if (event.value) {
      this.servAppointment.getAppointmentsByDate(event.value).subscribe(dateAppointments => {
        this.appointments = dateAppointments;
      });
    }

  }
}




