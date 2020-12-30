import { Injectable } from '@angular/core';
import { ResInvoice } from '../interfaces/res-invoice';

@Injectable({
  providedIn: 'root'
})
export class ServInvoiceService {

  constructor() { }

  
  //get all Invoices
  getInvoicesAll(){

  }

  //get Invoice by ID
  getInvoiceByID(code:number){

  }

  //Add a new Invoice
  addInvoice(newInvoice:ResInvoice){}
  
  //update an existing Invoice
  updateInvoice(updatedInvoice:ResInvoice){

  }
 
  //Delete an existing Invoice with all his history and related entities
  deleteInvoice(code:number){}

}
