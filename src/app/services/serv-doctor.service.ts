import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResDoctor } from 'src/app/interfaces/res-doctor'
import { Observable } from 'rxjs';
import { PathService } from './path.service';
import { ResReservedTime } from '../interfaces/res-reserved-time';

@Injectable({
  providedIn: 'root'
})
export class ServDoctorService {

  constructor(private http:HttpClient,private servPath:PathService) { }

  //Get and Delete subscribe inside component
  //Post and Put subscribe inside service
  
  

  //get all Doctors
  getDoctorsAll():Observable<ResDoctor[]>{
    return this.http.get<ResDoctor[]>(this.servPath.getPathDoctor());
  }
  
  getDoctorsBySpeciality(speciality:string):Observable<ResDoctor[]>{
    return this.http.get<ResDoctor[]>(this.servPath.getPathDoctor()+"/"+"speciality",{params:{
    speciality:speciality
    }});
  }
  //get Doctor by ID
  getDoctorByID(code:number):Observable<ResDoctor>{
    return this.http.get<ResDoctor>(this.servPath.getPathDoctor()+"/"+code);
  
  }

  getDoctorReservedTimes(code:number,date:string):Observable<ResReservedTime[]>{
    return  this.http.get<ResReservedTime[]>(this.servPath.getPathDoctor()+"/"+code+"/reservedTimes",{
      params:{
        date:date
      }
    });
  }
  //Add a new Doctor
  addDoctor(newDoctor:ResDoctor):Observable<ResDoctor>{
    return this.http.post<ResDoctor>(this.servPath.getPathDoctor(),newDoctor);
  }
  
  //update an existing Doctor
  updateDoctor(updatedDoctor:ResDoctor){
  return this.http.put(this.servPath.getPathDoctor()+"/"+updatedDoctor.code.toString(),updatedDoctor);
  }
 
  //Delete an existing Doctor with all his history and related entities
  deleteDoctor(code:number){
    return this.http.delete(this.servPath.getPathDoctor()+"/"+code.toString())
  }

 
}

  

