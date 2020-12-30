import { Injectable } from '@angular/core';
import { ResPackageBase } from '../interfaces/res-package-base';

@Injectable({
  providedIn: 'root'
})
export class ServPackageBaseService {

  constructor() { }

  //get all package bases
  getPackageBaseAll(){

  }

  //get a package by id
  getPackageBasebyID(code:number){

  }

  //Add a new package
  addPackageBase(newPackage:ResPackageBase){

  }

  //update an existing package
  updatePackageBase(updatedPackageBase:ResPackageBase){

  }

  //Delete a package
  deletePackageBase(code:number){

  }

}
