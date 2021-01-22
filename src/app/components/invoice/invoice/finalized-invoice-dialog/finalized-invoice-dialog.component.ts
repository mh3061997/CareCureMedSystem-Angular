import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Inject, OnChanges, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-finalized-invoice-dialog',
  templateUrl: './finalized-invoice-dialog.component.html',
  styleUrls: ['./finalized-invoice-dialog.component.css']
})
export class FinalizedInvoiceDialogComponent implements OnInit, AfterViewChecked {


  invoice: ResInvoice;
  totalAfterDiscount: number;
  totalPaidval: number;
  totalDue: number;
  discountval: number;

  @ViewChild('updateInfoForm', { static: false }) updateInfoForm: NgForm;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { invoice: ResInvoice },
    public dialogRef: MatDialogRef<FinalizedInvoiceDialogComponent>,
    private servInvoice: ServInvoiceService,
    private servAppointment: ServAppointmentService,
    private cdRef: ChangeDetectorRef) {

    this.invoice = data.invoice;
    this.totalAfterDiscount = this.invoice.totalAfterDiscount;
    this.totalPaidval = this.invoice.totalPaid;
    this.totalDue = this.invoice.totalDue;
    this.discountval = this.invoice.discount;

    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
     // console.log("backclick")
     });
     

  }

  calculateTotalAfterDiscount() {
    //console.log(1);

    this.totalAfterDiscount = Math.floor(this.totalDue * (100 - this.discountval) / 100);
    return this.totalAfterDiscount;
  }
  calculateTotalRemaining() {
    //console.log(1);

   
    return this.totalAfterDiscount-this.totalPaidval;
  }

  updateInvoiceInformation(updatedInvoice: ResInvoice) {



    this.servInvoice.updateInvoice(updatedInvoice).subscribe(response => {

      let updatedAppointment = this.invoice.appointment;
      updatedAppointment.status = "Invoiced";
      delete updatedAppointment.invoice;

      this.servAppointment.updateAppointment(updatedAppointment).subscribe(response => {

        this.dialogRef.close(true);

      });

    });
  }




  onUpdateInfoSubmit() {

    this.invoice.totalAfterDiscount = this.totalAfterDiscount;
    this.invoice.totalPaid = this.totalPaidval;
    this.invoice.totalRemaining = this.invoice.totalAfterDiscount - this.invoice.totalPaid;
    
    this.invoice.totalRemaining > 0 ? this.invoice.status = "Debt" : this.invoice.status = "Finalized";
    this.invoice.discount = this.updateInfoForm.value.discount;
    this.invoice.paymentMethod = this.updateInfoForm.value.paymentMethod;


   // console.log(this.invoice);
    this.updateInvoiceInformation(this.invoice);
  }

  ngOnInit(): void {

  }
  
  
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
}





