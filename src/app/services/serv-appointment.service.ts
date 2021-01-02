import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResAppointment } from '../interfaces/res-appointment';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { PathService } from './path.service';
@Injectable({
  providedIn: 'root'
})
export class ServAppointmentService {

  constructor(private http:HttpClient,private servPath:PathService) { }

  
  //get all Appointments
  getAppointmentsAll():Observable<ResAppointment[]>{
    return this.http.get<ResAppointment[]>(this.servPath.getPathAppointment());
  }

  //get Appointment by ID
  getAppointmentByID(code:number):Observable<ResAppointment>{
    return this.http.get<ResAppointment>(this.servPath.getPathAppointment()+"/"+code);
  
  }

  //Add a new Appointment
  addAppointment(newAppointment:ResAppointment){
    return this.http.post(this.servPath.getPathAppointment(),newAppointment);
  }
  
  //update an existing Appointment
  updateAppointment(updatedAppointment:ResAppointment){
  return this.http.put(this.servPath.getPathAppointment()+"/"+updatedAppointment.code.toString(),updatedAppointment);
  }
 
  //Delete an existing Appointment with all his history and related entities
  deleteAppointment(code:number){
    return this.http.delete(this.servPath.getPathAppointment()+"/"+"code")
  }

}
