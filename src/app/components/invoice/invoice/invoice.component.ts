import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice:ResInvoice;
  invoiceId:number;

  constructor(private currentRoute:ActivatedRoute,private router:Router,private servInvoice:ServInvoiceService) {

    this.getInvoiceCode();

    servInvoice.getInvoiceByID(this.invoiceId).subscribe(invoice =>{

    this.invoice = invoice;

  });
  }

  private getInvoiceCode(){
  this.invoiceId = this.currentRoute.snapshot.params['id'];
  }
  
  goToAppointment(code:number){
    this.router.navigate(['appointment',code.toString()])
  }
  ngOnInit(): void {
  }

}




