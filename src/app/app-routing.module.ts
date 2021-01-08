import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment/appointment.component';
import { AppointmentpageComponent } from './components/appointment/appointmentpage/appointmentpage.component';
import { DoctorComponent } from './components/doctor/doctor/doctor.component';
import { DoctorpageComponent } from './components/doctor/doctorpage/doctorpage.component';
import { PatientComponent } from './components/patient/patient/patient.component';
import { PatientpageComponent } from './components/patient/patientpage/patientpage.component';
import { PackagepageComponent  } from './components/packagebase/packagepage/packagepage.component'
import { PackagebaseComponent } from './components/packagebase/packagebase/packagebase.component';
import { NotFoundComponent } from './components/auth/not-found/not-found.component';
import { ServicePriceListComponent } from './components/service-price-list/service-price-list.component';
import { InvoiceComponent } from './components/invoice/invoice/invoice.component';
import { InvoiceNewPageComponent } from './components/invoice/invoice-new-page/invoice-new-page.component';
import { InvoicepageComponent } from './components/invoice/invoicepage/invoicepage.component';

const routes: Routes = [{
  path:"patient",component:PatientpageComponent},
    {path:"patient/:id",component:PatientComponent
  
},{
  path:"doctor",component:DoctorpageComponent
},{
  path:"doctor/:id",component:DoctorComponent
},{
  path:"appointment",component:AppointmentpageComponent
},{
  path:"appointment/:id",component:AppointmentComponent
},{
  path:"packagebases",component:PackagepageComponent
},{
  path:"packagebases/:id",component:PackagebaseComponent
},{
  path:"not-found",component:NotFoundComponent
},{
  path:"servicepricelist",component:ServicePriceListComponent
},{
  path:"invoice",component:InvoicepageComponent
},{
  path:"invoice/:id",component:InvoiceComponent
},{
  path:"invoice/:id/create",component:InvoiceNewPageComponent
},{
path:"**",redirectTo:"not-found"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
