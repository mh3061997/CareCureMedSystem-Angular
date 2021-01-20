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
import { NavBarSideComponent } from './components/ui/nav-bar-side/nav-bar-side.component'
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PatienttableComponent } from './components/patient/patienttable/patienttable/patienttable.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { AppointmentPatientTableComponent } from './components/tables/appointment-patient-table/appointment-patient-table.component';
import { ErrorInterceptor } from './interceptors/error-interceptor.interceptor';
import { MembershipPatientTableComponent } from './components/tables/membership-patient-table/membership-patient-table.component';
import { PatientAddMembershipDialogComponent } from './components/patient/patient-add-membership-dialog/patient-add-membership-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { PatientUpdateInformationDialogComponent } from './components/patient/patient-update-information-dialog/patient-update-information-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientAddNewDialogComponent } from './components/patient/patient-add-new-dialog/patient-add-new-dialog.component';
import { PackageBaseTableComponent } from './components/packagebase/packagepage/package-base-table/package-base-table.component';
import { PackageMembershipTableComponent } from './components/packagebase/packagebase/package-membership-table/package-membership-table.component';
import { PackagepageComponent } from './components/packagebase/packagepage/packagepage.component';
import { PackageAddNewDialogComponent } from './components/packagebase/packagepage/package-add-new-dialog/package-add-new-dialog.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DoctorUpdateInformationDialogComponent } from './components/doctor/doctor/doctor-update-information-dialog/doctor-update-information-dialog.component';
import { DoctorAppointmentTableComponent } from './components/doctor/doctor/doctor-appointment-table/doctor-appointment-table.component';
import { DoctorAddNewDialogComponent } from './components/doctor/doctorpage/doctor-add-new-dialog/doctor-add-new-dialog.component';
import { DoctorTableComponent } from './components/doctor/doctorpage/doctor-table/doctor-table.component';
import { AppointmentTableComponent } from './components/appointment/appointmentpage/appointment-table/appointment-table.component';
import { AppointmentAddNewDialogComponent } from './components/appointment/appointmentpage/appointment-add-new-dialog/appointment-add-new-dialog.component';
import { AppointmentUpdateInformationDialogComponent } from './components/appointment/appointment/appointment-update-information-dialog/appointment-update-information-dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PatientMedimagesTableComponent } from './components/patient/patient/patient-medimages-table/patient-medimages-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ImageFullscreenDialogComponent } from './components/patient/patient/patient-medimages-table/image-fullscreen-dialog/image-fullscreen-dialog.component';
import { PatientAddMedimageDialogComponent } from './components/patient/patient/patient-add-medimage-dialog/patient-add-medimage-dialog.component';
import { PackagebaseUpdateInformationDialogComponent } from './components/packagebase/packagebase/packagebase-update-information-dialog/packagebase-update-information-dialog.component';
import { ServicePriceListComponent } from './components/service-price-list/service-price-list.component';
import { InvoiceItemsTableComponent } from './components/invoice/invoice/invoice-items-table/invoice-items-table.component';
import { InvoiceTableComponent } from './components/invoice/invoicepage/invoice-table/invoice-table.component';
import { MedicalOpsComponent } from './components/appointment/medical-ops/medical-ops.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FinalizedInvoiceDialogComponent } from './components/invoice/invoice/finalized-invoice-dialog/finalized-invoice-dialog.component';
import { AddCustomItemDialogComponent } from './components/invoice/invoice/add-custom-item-dialog/add-custom-item-dialog.component';

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
    MembershipPatientTableComponent,
    PatientAddMembershipDialogComponent,
    PatientUpdateInformationDialogComponent,
    PatientAddNewDialogComponent,
    PackageBaseTableComponent,
    PackageMembershipTableComponent,
    PackagepageComponent,
    PackageAddNewDialogComponent,
    DoctorUpdateInformationDialogComponent,
    DoctorAppointmentTableComponent,
    DoctorAddNewDialogComponent,
    DoctorTableComponent,
    AppointmentTableComponent,
    AppointmentAddNewDialogComponent,
    AppointmentUpdateInformationDialogComponent,
    PatientMedimagesTableComponent,
    ImageFullscreenDialogComponent,
    PatientAddMedimageDialogComponent,
    PackagebaseUpdateInformationDialogComponent,
    ServicePriceListComponent,
      InvoiceItemsTableComponent,
      InvoiceTableComponent,
      MedicalOpsComponent,
      FinalizedInvoiceDialogComponent,
      AddCustomItemDialogComponent
      

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
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  entryComponents: [
    PatientAddMembershipDialogComponent,
    PatientUpdateInformationDialogComponent,
    PatientAddNewDialogComponent,
    PackageAddNewDialogComponent,
    DoctorUpdateInformationDialogComponent,
    DoctorAddNewDialogComponent,
    AppointmentAddNewDialogComponent,
    AppointmentUpdateInformationDialogComponent,
    PatientAddMedimageDialogComponent,
    ImageFullscreenDialogComponent,
    FinalizedInvoiceDialogComponent,
    AddCustomItemDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
