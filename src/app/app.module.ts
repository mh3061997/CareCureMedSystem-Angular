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
import { LayoutModule } from '@angular/cdk/layout';
import { PatienttableComponent } from './components/patient/patienttable/patienttable/patienttable.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppointmentPatientTableComponent } from './components/tables/appointment-patient-table/appointment-patient-table.component';
import { ErrorInterceptor } from './interceptors/error-interceptor.interceptor';
import { MembershipPatientTableComponent } from './components/tables/membership-patient-table/membership-patient-table.component';
import { PatientAddMembershipDialogComponent } from './components/patient/patient-add-membership-dialog/patient-add-membership-dialog.component'
import { PatientUpdateInformationDialogComponent } from './components/patient/patient-update-information-dialog/patient-update-information-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientAddNewDialogComponent } from './components/patient/patient-add-new-dialog/patient-add-new-dialog.component';
import { PackageBaseTableComponent } from './components/packagebase/packagepage/package-base-table/package-base-table.component';
import { PackageMembershipTableComponent } from './components/packagebase/packagebase/package-membership-table/package-membership-table.component';
import { PackagepageComponent } from './components/packagebase/packagepage/packagepage.component';
import { PackageAddNewDialogComponent } from './components/packagebase/packagepage/package-add-new-dialog/package-add-new-dialog.component'
import { DoctorUpdateInformationDialogComponent } from './components/doctor/doctor/doctor-update-information-dialog/doctor-update-information-dialog.component';
import { DoctorAppointmentTableComponent } from './components/doctor/doctor/doctor-appointment-table/doctor-appointment-table.component';
import { DoctorAddNewDialogComponent } from './components/doctor/doctorpage/doctor-add-new-dialog/doctor-add-new-dialog.component';
import { DoctorTableComponent } from './components/doctor/doctorpage/doctor-table/doctor-table.component';
import { AppointmentTableComponent } from './components/appointment/appointmentpage/appointment-table/appointment-table.component';
import { AppointmentAddNewDialogComponent } from './components/appointment/appointmentpage/appointment-add-new-dialog/appointment-add-new-dialog.component';
import { AppointmentUpdateInformationDialogComponent } from './components/appointment/appointment/appointment-update-information-dialog/appointment-update-information-dialog.component';
import { ImageFullscreenDialogComponent } from './components/patient/patient/patient-medimages-table/image-fullscreen-dialog/image-fullscreen-dialog.component';
import { PatientAddMedimageDialogComponent } from './components/patient/patient/patient-add-medimage-dialog/patient-add-medimage-dialog.component';
import { PackagebaseUpdateInformationDialogComponent } from './components/packagebase/packagebase/packagebase-update-information-dialog/packagebase-update-information-dialog.component';
import { ServicePriceListComponent } from './components/service-price-list/service-price-list.component';
import { InvoiceItemsTableComponent } from './components/invoice/invoice/invoice-items-table/invoice-items-table.component';
import { InvoiceTableComponent } from './components/invoice/invoicepage/invoice-table/invoice-table.component';
import { MedicalOpsComponent } from './components/appointment/medical-ops/medical-ops.component';
import { FinalizedInvoiceDialogComponent } from './components/invoice/invoice/finalized-invoice-dialog/finalized-invoice-dialog.component';
import { AddCustomItemDialogComponent } from './components/invoice/invoice/add-custom-item-dialog/add-custom-item-dialog.component';
import { AddCustomItemMedopsDialogComponent } from './components/appointment/medical-ops/add-custom-item-medops-dialog/add-custom-item-medops-dialog.component';
import { ServiceSearchPipe } from './pipes/service-search.pipe';
import { MinNumberDirectiveDirective } from './directives/min-number-directive.directive';
import { MaxNumberDirectiveDirective } from './directives/max-number-directive.directive';
import { SettleDebtDialogComponent } from './components/invoice/invoice/settle-debt-dialog/settle-debt-dialog.component';
import { AppointmentPatientDoctorTableComponent } from './components/appointment/appointment/appointment-patient-doctor-table/appointment-patient-doctor-table.component';
import { ServiceAddDialogComponent } from './components/service-price-list/service-add-dialog/service-add-dialog.component';
import { PatientAddOfficialdocDialogComponent } from './components/patient/patient/patient-add-officialdoc-dialog/patient-add-officialdoc-dialog.component';
import { JwtAuthInterceptorService } from './services/auth/jwt-auth-interceptor.service';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { NgxPrintModule } from 'ngx-print';
import { PrintLayoutInvoiceComponent } from './components/invoice/print-layout-invoice/print-layout-invoice.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { UsertableComponent } from './components/user-panel/usertable/usertable.component';
import { UserAddNewDialogComponent } from './components/user-panel/user-add-new-dialog/user-add-new-dialog.component';
import { UserChangeRoleDialogComponent } from './components/user-panel/usertable/user-change-role-dialog/user-change-role-dialog.component';
import { UserEnableDisableDialogComponent } from './components/user-panel/usertable/user-enable-disable-dialog/user-enable-disable-dialog.component';
import { ClientSideModule } from './client-side/client-side.module';
import { MaterialModule } from './sharedModules/material-module/material.module';
import { PatientInvoicesTableComponent } from './components/patient/patient/patient-invoices-table/patient-invoices-table.component';
import { InventoryOrderTableComponent } from './components/inventory/inventory-order-table/inventory-order-table.component';
import { InventoryItemTableComponent } from './components/inventory/inventory-item-table/inventory-item-table.component';
import { InventoryPageComponent } from './components/inventory/inventory-page/inventory-page.component';
import { KebabItemTableComponent } from './components/inventory/inventory-item-table/kebab-item-table/kebab-item-table.component';
import { LocalSpinnerComponent } from './components/ui/local-spinner/local-spinner.component';
import { KebabOrderTableComponent } from './components/inventory/inventory-order-table/kebab-order-table/kebab-order-table.component';
import { InventoryNewOrderDialogComponent } from './components/inventory/inventory-new-order-dialog/inventory-new-order-dialog.component';
import { InventoryNewItemDialogComponent } from './components/inventory/inventory-new-item-dialog/inventory-new-item-dialog.component';
import { InventoryUpdateItemPriceDialogComponent } from './components/inventory/inventory-update-item-price-dialog/inventory-update-item-price-dialog.component';
import { ReportsPageComponent } from './components/reports-page/reports-page.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DoctorInvoicesTableComponent } from './components/doctor/doctor-invoices-table/doctor-invoices-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientpageComponent,
    PatientComponent,
    DoctorpageComponent,
    DoctorComponent,
    AppointmentComponent,
    AppointmentpageComponent,
    PatientAddOfficialdocDialogComponent,
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
    ImageFullscreenDialogComponent,
    PatientAddMedimageDialogComponent,
    PackagebaseUpdateInformationDialogComponent,
    ServicePriceListComponent,
    InvoiceItemsTableComponent,
    InvoiceTableComponent,
    MedicalOpsComponent,
    FinalizedInvoiceDialogComponent,
    AddCustomItemDialogComponent,
    AddCustomItemMedopsDialogComponent,
    ServiceSearchPipe,
    MinNumberDirectiveDirective,
    MaxNumberDirectiveDirective,
    SettleDebtDialogComponent,
    AppointmentPatientDoctorTableComponent,
    ServiceAddDialogComponent,
    PatientAddOfficialdocDialogComponent,
    LogoutComponent,
    PrintLayoutInvoiceComponent,
    UserPanelComponent,
    UsertableComponent,
    UserAddNewDialogComponent,
    UserChangeRoleDialogComponent,
    UserEnableDisableDialogComponent,
    PatientInvoicesTableComponent,
    InventoryOrderTableComponent,
    InventoryItemTableComponent,
    InventoryPageComponent,
    KebabItemTableComponent,
    LocalSpinnerComponent,
    KebabOrderTableComponent,
    InventoryNewOrderDialogComponent,
    InventoryNewItemDialogComponent,
    InventoryUpdateItemPriceDialogComponent,
    ReportsPageComponent,
    DoctorInvoicesTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxPrintModule,
    ClientSideModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MaterialModule,
    HighchartsChartModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtAuthInterceptorService,
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
    AddCustomItemDialogComponent,
    AddCustomItemMedopsDialogComponent,
    SettleDebtDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
