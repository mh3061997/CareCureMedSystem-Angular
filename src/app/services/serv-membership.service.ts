import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResMembership } from '../interfaces/res-membership';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServMembershipService {

  
  constructor(private http:HttpClient,private servPath:PathService) { }

  
  //get all Memberships
  getMembershipsAll():Observable<ResMembership[]>{
    return this.http.get<ResMembership[]>(this.servPath.getPathMembership());
  }

  //get Membership by ID
  getMembershipByID(code:number):Observable<ResMembership>{
    return this.http.get<ResMembership>(this.servPath.getPathMembership()+"/"+code);
  
  }

  //Add a new Membership
  addMembership(newMembership:ResMembership){
    return this.http.post(this.servPath.getPathMembership(),newMembership);
  }
  
  //update an existing Membership
  updateMembership(updatedMembership:ResMembership){
  return this.http.put(this.servPath.getPathMembership()+"/"+updatedMembership.code.toString(),updatedMembership);
  }
 
  //Delete an existing Membership with all his history and related entities
  deleteMembership(code:number){
    return this.http.delete(this.servPath.getPathMembership()+"/"+"code")
  }
}
