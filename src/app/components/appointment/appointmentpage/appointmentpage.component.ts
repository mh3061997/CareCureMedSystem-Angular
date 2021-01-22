
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { AppointmentAddNewDialogComponent } from 'src/app/components/appointment/appointmentpage/appointment-add-new-dialog/appointment-add-new-dialog.component'

@Component({
  selector: 'app-appointmentpage',
  templateUrl: './appointmentpage.component.html',
  styleUrls: ['./appointmentpage.component.css']
})
export class AppointmentpageComponent implements OnInit {

  appointments: ResAppointment[];



  selectedDate: Date;
  dateChanged(event: Event) {
    console.log(`Selected: ${event}`);
  }

  constructor(public dialogAddAppointment: MatDialog, private servAppointment: ServAppointmentService) {

    servAppointment.getAppointmentsAll().subscribe(appointments => {

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
}




