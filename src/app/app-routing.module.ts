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
import { IsLoggedInGuardService } from './services/auth/is-loggedin-guard.service';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { AppComponent } from './app.component';
import { NavBarSideComponent } from './components/ui/nav-bar-side/nav-bar-side.component';
import { ClientContainerComponent } from './client-side/components/shared/client-container/client-container.component';

const routes: Routes = [
  {path:'',component:ClientContainerComponent},

  {path:'admin',component:NavBarSideComponent,children:[
    {
      path: "patient", component: PatientpageComponent,canActivate:[IsLoggedInGuardService]
    },
    {
      path: "patient/:id", component: PatientComponent,canActivate:[IsLoggedInGuardService]
    
    }, {
      path: "doctor", component: DoctorpageComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "doctor/:id", component: DoctorComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "appointment", component: AppointmentpageComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "appointment/:id", component: AppointmentComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "appointment/:id/medops", component: MedicalOpsComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "packagebases", component: PackagepageComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "packagebases/:id", component: PackagebaseComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "servicepricelist", component: ServicePriceListComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "invoice", component: InvoicepageComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "invoice/:id", component: InvoiceComponent,canActivate:[IsLoggedInGuardService]
    },{
      path:"userpanel",component:UserPanelComponent,canActivate:[IsLoggedInGuardService]
    }, {
      path: "notfound", component: NotFoundComponent
    }, {
      path: "login", component: LoginComponent
    }, {
      path: "register", component: RegisterUserComponent
    }, 
    // {path: "**", redirectTo: "notfound"}
  ]
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
