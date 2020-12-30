import { Injectable } from '@angular/core';
import { ResMembership } from '../interfaces/res-membership';

@Injectable({
  providedIn: 'root'
})
export class ServMembershipService {

  constructor() { }

  
  //get all Memberships
  getMembershipsAll(){

  }

  //get Membership by ID
  getMembershipByID(code:number){

  }

  //Add a new Membership
  addMembership(newMembership:ResMembership){}
  
  //update an existing Membership
  updateMembership(updatedMembership:ResMembership){

  }
 
  //Delete an existing Membership with all his history and related entities
  deleteMembership(code:number){}

}
