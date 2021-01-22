import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ResInvoiceItem } from 'src/app/interfaces/res-invoice-item';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServInvoiceItemService } from 'src/app/services/serv-invoice-item.service';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-add-custom-item-medops-dialog',
  templateUrl: './add-custom-item-medops-dialog.component.html',
  styles: [
  ]
})

export class AddCustomItemMedopsDialogComponent implements OnInit {

  @ViewChild('addCustomItemForm', { static: false }) addCustomItemForm: NgForm;

  constructor(
    public dialogRef: MatDialogRef<AddCustomItemMedopsDialogComponent>) {
  
         //to disable intended dialog action to fire on backclick
    //i return false and check it on parent to execute afterclosed action or not
    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
     // console.log("backclick")
     });

 }
  
  onAddCustomItemSubmit() {

    const newCustomInvoiceItem:ResInvoiceItem = {
      code:0,
      name:this.addCustomItemForm.value.name,
      price:this.addCustomItemForm.value.price
    }
   
      this.dialogRef.close(newCustomInvoiceItem);

  }
  ngOnInit(): void {
  }

}











