import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';
import {MatDialog} from '@angular/material/dialog';
import { FinalizedInvoiceDialogComponent } from './finalized-invoice-dialog/finalized-invoice-dialog.component';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice:ResInvoice;
  invoiceId:number;

  constructor(private currentRoute:ActivatedRoute,
    private router:Router,
    private servInvoice:ServInvoiceService,
    public dialogFinalizeInvoice:MatDialog,
    public servUtils:ServUtilitiesService) {

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

  openFinalizedInvoiceDialog(){
    const dialogRef =  this.dialogFinalizeInvoice.open(FinalizedInvoiceDialogComponent,{
       data:{
         invoice:this.invoice
       }
     });
   
     dialogRef.afterClosed().subscribe(closed =>{
    
       this.servInvoice.getInvoiceByID(this.invoiceId).subscribe(invoice =>{
 
         this.invoice = invoice;
         });
 
     });
   
   }
  ngOnInit(): void {
  }

}


 





