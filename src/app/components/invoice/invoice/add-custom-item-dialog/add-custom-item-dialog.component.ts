
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
  selector: 'app-add-custom-item-dialog',
  templateUrl: './add-custom-item-dialog.component.html',
  styleUrls: ['./add-custom-item-dialog.component.css']
})
export class AddCustomItemDialogComponent implements OnInit {

  invoice: ResInvoice;
  @ViewChild('addCustomItemForm', { static: false }) addCustomItemForm: NgForm;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { invoice: ResInvoice },
    public dialogRef: MatDialogRef<AddCustomItemDialogComponent>,
    private servInvoiceItem: ServInvoiceItemService) {

    this.invoice = data.invoice;

  }

  onAddCustomItemSubmit() {

    const newCustomInvoiceItem:ResInvoiceItem = {
      code:0,
      name:this.addCustomItemForm.value.name,
      price:this.addCustomItemForm.value.price,
      invoice:this.invoice
    }
    this.servInvoiceItem.addInvoiceItem(newCustomInvoiceItem).subscribe(response =>{
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
  }

}







