import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './components/appointment/appointment/appointment.component';
import { AppointmentpageComponent } from './components/appointment/appointmentpage/appointmentpage.component';
import { DoctorComponent } from './components/doctor/doctor/doctor.component';
import { DoctorpageComponent } from './components/doctor/doctorpage/doctorpage.component';
import { PatientComponent } from './components/patient/patient/patient.component';
import { PatientpageComponent } from './components/patient/patientpage/patientpage.component';
import { PackagepageComponent } from './components/packagebase/packagepage/packagepage.component'
import { PackagebaseComponent } from './components/packagebase/packagebase/packagebase.component';
import { NotFoundComponent } from './components/auth/not-found/not-found.component';
import { ServicePriceListComponent } from './components/service-price-list/service-price-list.component';
import { InvoiceComponent } from './components/invoice/invoice/invoice.component';
import { InvoicepageComponent } from './components/invoice/invoicepage/invoicepage.component';
import { MedicalOpsComponent } from './components/appointment/medical-ops/medical-ops.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterUserComponent } from './components/auth/register-user/register-user.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { UserPanelComponent } from './components/user-panel/user-panel.component';

const routes: Routes = [{
  path: "patient", component: PatientpageComponent,canActivate:[AuthGuardService]
},
{
  path: "patient/:id", component: PatientComponent,canActivate:[AuthGuardService]

}, {
  path: "doctor", component: DoctorpageComponent,canActivate:[AuthGuardService]
}, {
  path: "doctor/:id", component: DoctorComponent,canActivate:[AuthGuardService]
}, {
  path: "appointment", component: AppointmentpageComponent,canActivate:[AuthGuardService]
}, {
  path: "appointment/:id", component: AppointmentComponent,canActivate:[AuthGuardService]
}, {
  path: "appointment/:id/medops", component: MedicalOpsComponent,canActivate:[AuthGuardService]
}, {
  path: "packagebases", component: PackagepageComponent,canActivate:[AuthGuardService]
}, {
  path: "packagebases/:id", component: PackagebaseComponent,canActivate:[AuthGuardService]
}, {
  path: "servicepricelist", component: ServicePriceListComponent,canActivate:[AuthGuardService]
}, {
  path: "invoice", component: InvoicepageComponent,canActivate:[AuthGuardService]
}, {
  path: "invoice/:id", component: InvoiceComponent,canActivate:[AuthGuardService]
},{
  path:"userpanel",component:UserPanelComponent,canActivate:[AuthGuardService]
}, {
  path: "not-found", component: NotFoundComponent
}, {
  path: "login", component: LoginComponent
}, {
  path: "register", component: RegisterUserComponent
}, {
  path: "**", redirectTo: "login"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
