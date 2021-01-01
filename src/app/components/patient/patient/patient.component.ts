import { Component, OnInit } from '@angular/core';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient:ResPatient = {
    code: 9,
      name: "mohammed Ali ",
      gender: "male",
      email: "mh@gmail.com",
      mobile: "0111457920",
      age: 22,
      notes: "high hjghg pressure",
      memberships:[],
      appointments:[],
      medImages:[]
  };

//   appointmentArr:ResAppointment[] = [
//     {
//         code: 2,
//         speciality: "laser",
//         dateCreated: new Date("2017-01-01T02:02:58.000+00:00"),
//         dateToVisit: new Date("2020-05-08T17:54:20.000+00:00"),
//         status: "res only",
//         notes: "vip",
//         doctor: {
//             code: 3,
//             name: "haitham ",
//             mobile: "012987456",
//             email: "mh@gmail.com",
//             gender: "male",
//             age: 22,
//             speciality: "heart",
//             appointments: []
//         },
//       patient: {
//             code: 1,
//             name: "oka  ali mohamed",
//             gender: "male",
//             email: "mh@gmail.com",
//             mobile: "0111457920",
//             age: 22,
//             notes: "high blood pressure",
//             memberships: [],
//             appointments: [],
//             medImages: []
//     }
//   }
// ]

appointmentArr:ResAppointment[];

  constructor(private servAppointment:ServAppointmentService) {
    servAppointment.getAppointmentsAll().subscribe(arr =>{
    this.appointmentArr = arr;
    console.log(this.appointmentArr);2
    },error=>{
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
