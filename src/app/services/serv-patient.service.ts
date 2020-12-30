import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResMedImage } from '../interfaces/res-med-image';
import { ResPatient } from '../interfaces/res-patient';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServPatientService {

  constructor(private http:HttpClient) { }

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


  //get all patients
  getPatientsAll(){

  }

  //get Patient by ID
  getPatientByID(code:number){

  }

  //Add a new patient
  addPatient(newPatient:ResPatient){}
  
  //update an existing patient
  updatePatient(updatedPatient:ResPatient){

  }
 
  //Delete an existing patient with all his history and related entities
  deletePatient(code:number){}



}

  

