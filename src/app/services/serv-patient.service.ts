import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResMedImage } from '../interfaces/res-med-image';
import { ResPatient } from '../interfaces/res-patient';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServPatientService {
  settlePatientDebt(code: number, debtTotal: number) {
   return this.http.put(this.servPath.getPathPatient()+"/"+code+"/debt/"+debtTotal,null);
  }

  constructor(private http:HttpClient,private servPath:PathService) { }

  //Get and Delete subscribe inside component
  //Post and Put subscribe inside service
  
  

  //get all Patients
  getPatientsAll():Observable<ResPatient[]>{
    return this.http.get<ResPatient[]>(this.servPath.getPathPatient());
  }

  //get Patient by ID
  getPatientByID(code:number):Observable<ResPatient>{
    return this.http.get<ResPatient>(this.servPath.getPathPatient()+"/"+code);
  
  }

  //Add a new Patient
  addPatient(newPatient:ResPatient){
    return this.http.post(this.servPath.getPathPatient(),newPatient);
  }
  
  //update an existing Patient
  updatePatient(updatedPatient:ResPatient){
  return this.http.put(this.servPath.getPathPatient()+"/"+updatedPatient.code.toString(),updatedPatient);
  }
 
  //Delete an existing Patient with all his history and related entities
  deletePatient(code:number){
    return this.http.delete(this.servPath.getPathPatient()+"/"+code.toString())
  }


  //Add a medical image to patient record
  addPatientMedImage(mi: ResMedImage, patientTry: ResPatient) {
    const obj = {
      code:mi.code,
      image:mi.image,
      type:mi.type,
      dateAdded:mi.dateAdded,
      patient:patientTry
    };

    this.http.post("http://localhost:8080/medImage",obj,{
      observe: 'response'
    })
    .subscribe(
      responseData => {
        console.log(responseData);
      },
      error => {
        console.log(error.message);
    });
  }

}

  

