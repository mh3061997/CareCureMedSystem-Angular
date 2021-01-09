import { Component, OnInit } from '@angular/core';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
 import { ServInvoiceService } from 'src/app/services/serv-invoice.service';

@Component({
  selector: 'app-invoicepage',
  templateUrl: './invoicepage.component.html',
  styleUrls: ['./invoicepage.component.css']
})
export class InvoicepageComponent implements OnInit {
  
  invoices:ResInvoice[];

  constructor(private servInvoice:ServInvoiceService) {
  
    this.servInvoice.getInvoicesAll().subscribe(invoices=>{
    this.invoices=invoices;
    });
   }

   ngOnInit(){
     
   }

}
