import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment/appointment.component';
import { AppointmentpageComponent } from './components/appointment/appointmentpage/appointmentpage.component';
import { DoctorComponent } from './components/doctor/doctor/doctor.component';
import { DoctorpageComponent } from './components/doctor/doctorpage/doctorpage.component';
import { PatientComponent } from './components/patient/patient/patient.component';
import { PatientpageComponent } from './components/patient/patientpage/patientpage.component';

const routes: Routes = [{
  path:"patient",component:PatientpageComponent,children:[{
    path:":id",component:PatientComponent
  }]
},{
  path:"doctor",component:DoctorpageComponent,children:[{
    path:":id",component:DoctorComponent
  }]
},{
  path:"appointment",component:AppointmentpageComponent,children:[{
    path:":id",component:AppointmentComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
