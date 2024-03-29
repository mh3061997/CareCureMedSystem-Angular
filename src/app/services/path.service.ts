import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }




  private approotPath: string = environment.apiEndPoint;

  private appBlogPath: string = environment.apiBlogEndPoint;

  private patientPath: string = "patient";

  private appointmentPath: string = "appointment";

  private doctorPath: string = "doctor";

  private packageBasePath: string = "packageBase";

  private medImagePath: string = "medImage";

  private membershipPath: string = "packageMembership";

  private invoicePath: string = "invoice";

  private servicePriceListPath: string = "servicePriceList";

  private invoiceItemPath: string = "invoiceItem";

  private noteAppointmentPath: string = "noteAppointment"

  private doctorDayAvail: string = "doctorDayAvail"

  private userDaoPath: string = "userDao";

  private registerPatientPath: string = "register";

  private registerNonPatientPath: string = "registerNonPatient";

  private contactUsPath: string = "utils/email-contact-us";

  private contactAppointmentPath: string = "utils/email-contact-appointment";

  private loginPath: string = "login";

  private blogJsonPath: string = "wp-json/wp/v2/posts/";

  private inventoryItemPath: string = "inventory/item/";

  private inventoryOrderPath: string = "inventory/order/";

  private reportsPath: string = "reports";

  public getPathReports(): string {
    return this.approotPath + this.reportsPath;
  }
  
  public getPathinventoryItem(): string {
    return this.approotPath + this.inventoryItemPath;
  }

  public getPathinventoryOrder(): string {
    return this.approotPath + this.inventoryOrderPath;
  }
  public getPathBlogJson() {
    return this.appBlogPath + this.blogJsonPath;
  }
  public getPathLogin() {
    return this.approotPath + this.loginPath;
  }
  public getContactUsPath() {
    return this.approotPath + this.contactUsPath;
  }
  public getContactAppointmentPath() {
    return this.approotPath + this.contactAppointmentPath;
  }

  public getPathRegisterPatient() {
    return this.approotPath + this.registerPatientPath;
  }

  public getPathRegisterNonPatient() {
    return this.approotPath + this.registerNonPatientPath;
  }

  public getPathUserDao() {
    return this.approotPath + this.userDaoPath;
  }
  public getPathDoctorDayAvail() {
    return this.approotPath + this.doctorDayAvail;
  }
  public getPathNoteAppointment() {
    return this.approotPath + this.noteAppointmentPath;
  }
  public getPathServicePriceList() {
    return this.approotPath + this.servicePriceListPath;
  }
  public getPathInvoiceItem() {
    return this.approotPath + this.invoiceItemPath;
  }
  public getPathPatient() {
    return this.approotPath + this.patientPath;
  }

  public getPathDoctor() {
    return this.approotPath + this.doctorPath;
  }
  public getPathAppointment() {
    return this.approotPath + this.appointmentPath;
  }
  public getPathMedImage() {
    return this.approotPath + this.medImagePath;
  }
  public getPathInvoice() {
    return this.approotPath + this.invoicePath;
  }
  public getPathMembership() {
    return this.approotPath + this.membershipPath;
  }
  public getPathPackageBase() {
    return this.approotPath + this.packageBasePath;
  }
}
