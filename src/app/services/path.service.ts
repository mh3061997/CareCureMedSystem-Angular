import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  // private approotPath:string ="http://18.159.60.62:8080/medsystem-0.0.1-SNAPSHOT/";
  private approotPath:string ="http://localhost:8080/";

   private patientPath:string ="patient";

   private appointmentPath:string = "appointment";

  private  doctorPath:string = "doctor";

   private packageBasePath:string = "packageBase";

   private medImagePath:string = "medImage";

   private membershipPath:string = "packageMembership";

  private  invoicePath:string ="invoice";

  private servicePriceListPath:string="servicePriceList";

  private invoiceItemPath:string="invoiceItem";
  
  private noteAppointmentPath:string="noteAppointment"

  private doctorDayAvail:string="doctorDayAvail"

  private userDaoPath:string="userDao";

  private registerPatientPath:string ="register";

  private registerNonPatientPath:string ="registerNonPatient";

  public getPathRegisterPatient(){
    return this.approotPath+this.registerPatientPath;
  }

  public getPathRegisterNonPatient(){
    return this.approotPath+this.registerNonPatientPath;
  }
  
  public getPathUserDao(){
    return this.approotPath+this.userDaoPath;
  }
  public getPathDoctorDayAvail(){
    return this.approotPath+this.doctorDayAvail;
  }
  public getPathNoteAppointment(){
    return this.approotPath+this.noteAppointmentPath;
  }
  public getPathServicePriceList(){
    return this.approotPath+this.servicePriceListPath;
  }
  public getPathInvoiceItem(){
    console.log(this.approotPath);
    return this.approotPath+this.invoiceItemPath;
  }
   public getPathPatient(){
     return this.approotPath+this.patientPath;
   }

   public getPathDoctor(){
    return this.approotPath+this.doctorPath;
  }
  public getPathAppointment(){
    return this.approotPath+this.appointmentPath;
  }
  public getPathMedImage(){
    return this.approotPath+this.medImagePath;
  }
  public getPathInvoice(){
    return this.approotPath+this.invoicePath;
  }
  public getPathMembership(){
    return this.approotPath+this.membershipPath;
  }
  public getPathPackageBase(){
    return this.approotPath+this.packageBasePath;
  }
}
