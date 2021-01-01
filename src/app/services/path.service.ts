import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

   private approotPath:string ="http://localhost:8080/";

   private patientPath:string ="patient";

   private appointmentPath:string = "appointment";

  private  doctorPath:string = "doctor";

   private packageBasePath:string = "packageBase";

   private medImagePath:string = "medImage";

   private membershipPath:string = "packageMembership";

  private  invoicePath:string ="invoice";

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
