import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientpageComponent } from './components/patient/patientpage/patientpage.component';
import { PatientComponent } from './components/patient/patient/patient.component';
import { DoctorpageComponent } from './components/doctor/doctorpage/doctorpage.component';
import { DoctorComponent } from './components/doctor/doctor/doctor.component';
import { AppointmentComponent } from './components/appointment/appointment/appointment.component';
import { AppointmentpageComponent } from './components/appointment/appointmentpage/appointmentpage.component';
import { PackagebaseComponent } from './components/packagebase/packagebase/packagebase.component';
import { InvoiceComponent } from './components/invoice/invoice/invoice.component';
import { InvoicepageComponent } from './components/invoice/invoicepage/invoicepage.component';
import { NotFoundComponent } from './components/auth/not-found/not-found.component';
import { RegisterUserComponent } from './components/auth/register-user/register-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import {NavBarSideComponent} from './components/ui/nav-bar-side/nav-bar-side.component'
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    PatientpageComponent,
    PatientComponent,
    DoctorpageComponent,
    DoctorComponent,
    AppointmentComponent,
    AppointmentpageComponent,
    PackagebaseComponent,
    InvoiceComponent,
    InvoicepageComponent,
    NotFoundComponent,
    RegisterUserComponent,
    LoginComponent,
    NavBarSideComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
