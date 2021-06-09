import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResInvoiceItem } from '../interfaces/res-invoice-item';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServInvoiceItemService {

 
  constructor(private http:HttpClient,private servPath:PathService) { }


  //get all InvoiceItems
  getInvoiceItemsAll():Observable<ResInvoiceItem[]>{
    return this.http.get<ResInvoiceItem[]>(this.servPath.getPathInvoiceItem());
  }

  //get InvoiceItem by ID
  getInvoiceItemByID(code:number):Observable<ResInvoiceItem>{
    return this.http.get<ResInvoiceItem>(this.servPath.getPathInvoiceItem()+"/"+code);
  
  }

  //Add a new InvoiceItem
  addInvoiceItem(newInvoiceItem:ResInvoiceItem){
    return this.http.post(this.servPath.getPathInvoiceItem(),newInvoiceItem);
  }
  
    //Add a new InvoiceItem
    addInvoiceItemMulti(newInvoiceItemArr:ResInvoiceItem[]){
      return this.http.post(this.servPath.getPathInvoiceItem()+"/addmulti",newInvoiceItemArr);
    }
    

  //update an existing InvoiceItem
  updateInvoiceItem(updatedInvoiceItem:ResInvoiceItem){
  return this.http.put(this.servPath.getPathInvoiceItem()+"/"+updatedInvoiceItem.code.toString(),updatedInvoiceItem);
  }
 
  //Delete an existing InvoiceItem with all his history and related entities
  deleteInvoiceItem(code:number){
    return this.http.delete(this.servPath.getPathInvoiceItem()+"/"+code.toString())
  }

}
