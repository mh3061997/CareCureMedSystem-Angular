
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResUserDao } from '../interfaces/res-user-dao';
import { ResUserDtoRegister } from '../interfaces/res-user-dto-register';

import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PathService } from './path.service';
import { ResPatient } from '../interfaces/res-patient';

@Injectable({
  providedIn: 'root'
})
export class ServUsersService {

  constructor(private http: HttpClient, private servPath: PathService) { }
  //get all Users
  getUsersAll(): Observable<ResUserDao[]> {
    return this.http.get<ResUserDao[]>(this.servPath.getPathUserDao());
  }
  //Add a new NON PATIENT (ALL ROLES ALLOWED) User
  registerUser(newUser: ResUserDtoRegister) {
    return this.http.post(this.servPath.getPathRegisterNonPatient(), newUser,{
      observe:'response'}
    );
  }

  //update an existing User
  enableUser(updatedUser: ResUserDao) {
    return this.http.put(this.servPath.getPathUserDao() + "/" + updatedUser.code.toString() + "/" + "enable", updatedUser);
  }

  //Delete an existing User with all his history and related entities
  //update an existing User
  disableUser(updatedUser: ResUserDao) {
    return this.http.put(this.servPath.getPathUserDao() + "/" + updatedUser.code.toString() + "/" + "disable", updatedUser);
  }

  changeRoleUser(updatedUser: ResUserDao) {
    return this.http.put(this.servPath.getPathUserDao() + "/" + updatedUser.code.toString() + "/" + "role", updatedUser);
  }

  isPatientAssociatedWithUser(mobile:string){
    return this.http.get<any>(this.servPath.getPathUserDao() + "/patient",{params:{
      mobile:mobile
    },observe:'response'});
  }

  isDoctorAssociatedWithUser(mobile:string){
    return this.http.get<any>(this.servPath.getPathUserDao() + "/doctor",{params:{
      mobile:mobile
    },observe:'response'});
  }
}



