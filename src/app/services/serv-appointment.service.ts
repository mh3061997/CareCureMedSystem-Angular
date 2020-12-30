import { Injectable } from '@angular/core';
import { ResAppointment } from '../interfaces/res-appointment';

@Injectable({
  providedIn: 'root'
})
export class ServAppointmentService {

  constructor() { }

  
  //get all Appointments
  getAppointmentsAll(){

  }

  //get Appointment by ID
  getAppointmentByID(code:number){

  }

  //Add a new Appointment
  addAppointment(newAppointment:ResAppointment){}
  
  //update an existing Appointment
  updateAppointment(updatedAppointment:ResAppointment){

  }
 
  //Delete an existing Appointment with all his history and related entities
  deleteAppointment(code:number){}

}
