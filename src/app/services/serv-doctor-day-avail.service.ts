import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResDoctorDayAvail } from '../interfaces/res-doctor-day-avail';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServDoctorDayAvailService {

  constructor(private http: HttpClient, private servPath: PathService) { }

  //Get and Delete subscribe inside component
  //Post and Put subscribe inside service



  //get all DoctorDayAvails
  getDoctorDayAvailsAll(): Observable<ResDoctorDayAvail[]> {
    return this.http.get<ResDoctorDayAvail[]>(this.servPath.getPathDoctorDayAvail());
  }

  //get DoctorDayAvail by ID
  getDoctorDayAvailByID(code: number): Observable<ResDoctorDayAvail> {
    return this.http.get<ResDoctorDayAvail>(this.servPath.getPathDoctorDayAvail() + "/" + code);

  }

  //Add a new DoctorDayAvail
  addDoctorDayAvail(newDoctorDayAvail: ResDoctorDayAvail): Observable<ResDoctorDayAvail> {
    return this.http.post<ResDoctorDayAvail>(this.servPath.getPathDoctorDayAvail(), newDoctorDayAvail);
  }

  //Add a new DoctorDayAvail
  addDoctorDayAvailMulti(newDoctorDayAvailArr: ResDoctorDayAvail[]) {
    return this.http.post(this.servPath.getPathDoctorDayAvail() + "/addmulti", newDoctorDayAvailArr);
  }

  //update an existing DoctorDayAvail
  updateDoctorDayAvailMulti(doctorCode: number, updatedDoctorDayAvailArr: ResDoctorDayAvail[]) {
    return this.http.put(this.servPath.getPathDoctorDayAvail() + "/" + "updatemulti", updatedDoctorDayAvailArr,
      {
        params: {
          doctorCode: doctorCode.toString()
        }
      });
  }

  //update an existing DoctorDayAvail
  updateDoctorDayAvail(updatedDoctorDayAvail: ResDoctorDayAvail) {
    return this.http.put(this.servPath.getPathDoctorDayAvail() + "/" + updatedDoctorDayAvail.code.toString(), updatedDoctorDayAvail);
  }

  //Delete an existing DoctorDayAvail with all his history and related entities
  deleteDoctorDayAvail(code: number) {
    return this.http.delete(this.servPath.getPathDoctorDayAvail() + "/" + code.toString())
  }



}


