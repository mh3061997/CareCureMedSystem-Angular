import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppointmentClientDialogComponent } from '../appointment-client-dialog/appointment-client-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    autoplay:true,
    loop: true,
    dots: true,
    navSpeed: 100,
    dotsEach:true,
    responsive: {
      0: {
        items: 2 
      },
      400: {
        items: 3
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    },
    nav: false
  }
  
  constructor(public dialogAddAppointment: MatDialog) { }

  ngOnInit(): void {
  }


  openNewAppointmentDialog() {
    const dialogRef = this.dialogAddAppointment.open(AppointmentClientDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe();

  }

}
