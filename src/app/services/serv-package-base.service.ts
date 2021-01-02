import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResPackageBase } from '../interfaces/res-package-base';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServPackageBaseService {


  constructor(private http:HttpClient,private servPath:PathService) { }

  
  //get all PackageBases
  getPackageBasesAll():Observable<ResPackageBase[]>{
    return this.http.get<ResPackageBase[]>(this.servPath.getPathPackageBase());
  }

  //get PackageBase by ID
  getPackageBaseByID(code:number):Observable<ResPackageBase>{
    return this.http.get<ResPackageBase>(this.servPath.getPathPackageBase()+"/"+code);
  
  }

  //Add a new PackageBase
  addPackageBase(newPackageBase:ResPackageBase){
    return this.http.post(this.servPath.getPathPackageBase(),newPackageBase);
  }
  
  //update an existing PackageBase
  updatePackageBase(updatedPackageBase:ResPackageBase){
  return this.http.put(this.servPath.getPathPackageBase()+"/"+updatedPackageBase.code.toString(),updatedPackageBase);
  }
 
  //Delete an existing PackageBase with all his history and related entities
  deletePackageBase(code:number){
    return this.http.delete(this.servPath.getPathPackageBase()+"/"+"code")
  }
}
