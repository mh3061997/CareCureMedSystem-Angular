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
  addpatientmedimage(mi: ResMedImage, patientTry: ResPatient) {
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

  medimagesarr:ResMedImage[];

  constructor(private http:HttpClient) { }

  getMedImages():Observable<ResMedImage[]> {
  
   return  this.http
     .get<ResMedImage[]>('http://localhost:8080/medImage');

 }
 

}

  

