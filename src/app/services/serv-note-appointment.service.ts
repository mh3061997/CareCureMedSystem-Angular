import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResNoteAppointment } from 'src/app/interfaces/res-note-appointment'
import { Observable } from 'rxjs';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServNoteAppointmentService {

  constructor(private http:HttpClient,private servPath:PathService) { }

  //Get and Delete subscribe inside component
  //Post and Put subscribe inside service
  
  

  //get all NoteAppointments
  getNoteAppointmentsAll():Observable<ResNoteAppointment[]>{
    return this.http.get<ResNoteAppointment[]>(this.servPath.getPathNoteAppointment());
  }

  //get NoteAppointment by ID
  getNoteAppointmentByID(code:number):Observable<ResNoteAppointment>{
    return this.http.get<ResNoteAppointment>(this.servPath.getPathNoteAppointment()+"/"+code);
  
  }

  //Add a new NoteAppointment
  addNoteAppointment(newNoteAppointment:ResNoteAppointment){
    return this.http.post(this.servPath.getPathNoteAppointment(),newNoteAppointment);
  }
  
  //update an existing NoteAppointment
  updateNoteAppointment(updatedNoteAppointment:ResNoteAppointment){
  return this.http.put(this.servPath.getPathNoteAppointment()+"/"+updatedNoteAppointment.code.toString(),updatedNoteAppointment);
  }
 
  //Delete an existing NoteAppointment with all his history and related entities
  deleteNoteAppointment(code:number){
    return this.http.delete(this.servPath.getPathNoteAppointment()+"/"+code.toString())
  }

}

  

