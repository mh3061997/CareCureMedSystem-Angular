import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import {ResPatient} from 'src/app/interfaces/res-patient';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-finalized-invoice-dialog',
  templateUrl: './finalized-invoice-dialog.component.html',
  styleUrls: ['./finalized-invoice-dialog.component.css']
})
export class FinalizedInvoiceDialogComponent implements OnInit {

  
  invoice:ResInvoice;
  totalAfterDiscount:number;
  totalPaidval:number;
  totalDue:number;
  discountval:number;
  @ViewChild('updateInfoForm', { static: false }) updateInfoForm: NgForm;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{invoice:ResInvoice},
              public dialogRef: MatDialogRef<FinalizedInvoiceDialogComponent>,
              private servInvoice:ServInvoiceService) {

    this.invoice=data.invoice;
    this.totalAfterDiscount=this.invoice.totalAfterDiscount;
    this.totalPaidval=this.invoice.totalPaid;
    this.totalDue=this.invoice.totalDue;
    this.discountval=this.invoice.discount;
    
  }
              
  calculateTotalAfterDiscount(){
    //console.log(1);

    this.totalAfterDiscount =  this.totalDue*(100-this.discountval)/100;
    return this.totalAfterDiscount;
  }

  updateInvoiceInformation(updatedInvoice:ResInvoice){
    
    //console.log(this.updateInfoForm);

    this.servInvoice.updateInvoice(updatedInvoice).subscribe(response =>{

      this.dialogRef.close();

    });
  }
   
   
 
  
  onUpdateInfoSubmit(){

    this.invoice.totalAfterDiscount=this.totalAfterDiscount;
    this.invoice.totalPaid=this.updateInfoForm.value.totalPaid;
    this.invoice.totalRemaining=this.invoice.totalAfterDiscount-this.invoice.totalPaid;
    this.invoice.status="Finalized";
    this.invoice.discount=this.updateInfoForm.value.discount;
    this.invoice.paymentMethod=this.updateInfoForm.value.paymentMethod;

    
   // console.log(this.invoice);
    this.updateInvoiceInformation(this.invoice);
  }

  ngOnInit(): void {
    
  }

}




 
