
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { AppointmentAddNewDialogComponent} from 'src/app/components/appointment/appointmentpage/appointment-add-new-dialog/appointment-add-new-dialog.component'

@Component({
  selector: 'app-appointmentpage',
  templateUrl: './appointmentpage.component.html',
  styleUrls: ['./appointmentpage.component.css']
})
export class AppointmentpageComponent implements OnInit {
  
  appointments:ResAppointment[];

  
   
  selectedDate: Date;
  dateChanged(event:Event) {
    console.log(`Selected: ${event}`);
  }

  constructor(public dialogAddAppointment:MatDialog,private servAppointment:ServAppointmentService) {

    servAppointment.getAppointmentsAll().subscribe(appointments =>{

      this.appointments = appointments;
      let tempmap = new Map();
      tempmap.set(appointments[0],0);
      tempmap.set(appointments[0],tempmap.get(appointments[0])+1);
      tempmap.set(appointments[1],5);
      tempmap.set(appointments[1],5698);
      tempmap.set(appointments[0],22);
      console.log(tempmap);
    });
  }

  ngOnInit(): void {
  }


  openNewAppointmentDialog(){
    const dialogRef =  this.dialogAddAppointment.open(AppointmentAddNewDialogComponent);
   
     dialogRef.afterClosed().subscribe(closed =>{
    
       this.servAppointment.getAppointmentsAll().subscribe(appointmentsarr =>{
 
         this.appointments = appointmentsarr;
         console.log("i updated");
         });
 
     });
   
   }
}

 


