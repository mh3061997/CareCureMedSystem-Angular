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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PatienttableComponent} from './components/patient/patienttable/patienttable/patienttable.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCardModule} from '@angular/material/card';
import { AppointmentPatientTableComponent } from './components/tables/appointment-patient-table/appointment-patient-table.component';
import { AppointmentDoctorTableComponent } from './components/tables/appointment-doctor-table/appointment-doctor-table.component';
import { AppointmentTableComponent } from './components/tables/appointment-table/appointment-table.component';
import { ErrorInterceptor } from './interceptors/error-interceptor.interceptor';
import { MembershipPatientTableComponent } from './components/tables/membership-patient-table/membership-patient-table.component';
import { PatientAddMembershipDialogComponent } from './components/patient/patient-add-membership-dialog/patient-add-membership-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { PatientUpdateInformationDialogComponent } from './components/patient/patient-update-information-dialog/patient-update-information-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { PatientAddNewDialogComponent } from './components/patient/patient-add-new-dialog/patient-add-new-dialog.component';
import { PackageBaseTableComponent } from './components/packagebase/packagepage/package-base-table/package-base-table.component';
import { PackageMembershipTableComponent } from './components/packagebase/packagebase/package-membership-table/package-membership-table.component';

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
    NavBarSideComponent,
    PatienttableComponent,
    AppointmentPatientTableComponent,
    AppointmentDoctorTableComponent,
    AppointmentTableComponent,
    MembershipPatientTableComponent,
    PatientAddMembershipDialogComponent,
    PatientUpdateInformationDialogComponent,
    PatientAddNewDialogComponent,
    PackageBaseTableComponent,
    PackageMembershipTableComponent
     
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
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FontAwesomeModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  entryComponents: [
    PatientAddMembershipDialogComponent,
    PatientUpdateInformationDialogComponent,
    PatientAddNewDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
