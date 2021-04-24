import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { AppointmentClientDialogComponent } from '../../appointment-client-dialog/appointment-client-dialog.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faPhoneAlt=faPhoneAlt;

  constructor(public dialogAddAppointment: MatDialog,public authService:AuthService) {
    
  }

  ngOnInit(): void {
  }


  openNewAppointmentDialog() {
    const dialogRef = this.dialogAddAppointment.open(AppointmentClientDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe();

  }

isShowMyHistory(){
  return this.authService.isUserLoggedIn() && this.authService.isUserPatient();
}

isShowAdminPanel(){

  return this.authService.isUserLoggedIn() && (this.authService.isUserAdmin() || this.authService.isUserDoctor());

}
}
