import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResMedImage } from '../interfaces/res-med-image';
import { ResServicePriceList } from '../interfaces/res-service-price-list';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServServicePriceListService {

  constructor(private http:HttpClient,private servPath:PathService) { }
  //get all ServicePriceLists
  getServicePriceListsAll():Observable<ResServicePriceList[]>{
    return this.http.get<ResServicePriceList[]>(this.servPath.getPathServicePriceList());
  }

  //get ServicePriceList by ID
  getServicePriceListByID(code:number):Observable<ResServicePriceList>{
    return this.http.get<ResServicePriceList>(this.servPath.getPathServicePriceList()+"/"+code);
  
  }

   //get ServicePriceList by ID
   getServicePriceListBySpeciality(speciality:string):Observable<ResServicePriceList[]>{
    return this.http.get<ResServicePriceList[]>(this.servPath.getPathServicePriceList()+"/"+"speciality",{
      params:{
        speciality:speciality
      }
    });
  
  }

  //Add a new ServicePriceList
  addServicePriceList(newServicePriceList:ResServicePriceList){
    return this.http.post(this.servPath.getPathServicePriceList(),newServicePriceList);
  }
  
  //update an existing ServicePriceList
  updateServicePriceList(updatedServicePriceList:ResServicePriceList){
  return this.http.put(this.servPath.getPathServicePriceList()+"/"+updatedServicePriceList.code.toString(),updatedServicePriceList);
  }
 
  //Delete an existing ServicePriceList with all his history and related entities
  deleteServicePriceList(code:number){
    return this.http.delete(this.servPath.getPathServicePriceList()+"/"+code.toString())
  }


}
