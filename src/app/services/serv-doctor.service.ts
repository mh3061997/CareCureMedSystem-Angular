import { Injectable } from '@angular/core';
import { ResDoctor } from '../interfaces/res-doctor';

@Injectable({
  providedIn: 'root'
})
export class ServDoctorService {

  constructor() { }

  
  //get all Doctors
  getDoctorsAll(){

  }

  //get Doctor by ID
  getDoctorByID(code:number){

  }

  //Add a new Doctor
  addDoctor(newDoctor:ResDoctor){}
  
  //update an existing Doctor
  updateDoctor(updatedDoctor:ResDoctor){

  }
 
  //Delete an existing Doctor with all his history and related entities
  deleteDoctor(code:number){}

}
