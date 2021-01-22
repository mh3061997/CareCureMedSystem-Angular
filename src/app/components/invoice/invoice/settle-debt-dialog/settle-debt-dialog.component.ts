
import { Component, Inject,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ResInvoiceItem } from 'src/app/interfaces/res-invoice-item';
import { ServInvoiceItemService } from 'src/app/services/serv-invoice-item.service';

@Component({
  selector: 'app-settle-debt-dialog',
  templateUrl: './settle-debt-dialog.component.html',
  styleUrls: ['./settle-debt-dialog.component.css']
})
export class SettleDebtDialogComponent implements  OnInit{

  invoice: ResInvoice;
  totalDebt:number;
  
  @ViewChild('settleDebtForm', { static: false }) settleDebtForm: NgForm;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { invoice: ResInvoice ,totalDebt:number},
    public dialogRef: MatDialogRef<SettleDebtDialogComponent>,
    private servInvoiceItem: ServInvoiceItemService) {

    this.invoice = data.invoice;
    this.totalDebt = data.totalDebt;

  }

  onAddCustomItemSubmit() {

    const newCustomInvoiceItem:ResInvoiceItem = {
      code:0,
      name:"Settle Debt",
      price:this.settleDebtForm.value.debtDeducted,
      invoice:this.invoice
    }
    this.servInvoiceItem.addInvoiceItem(newCustomInvoiceItem).subscribe(response =>{
      this.dialogRef.close(newCustomInvoiceItem.price);
    });
  }

  ngOnInit(): void {
  }


}







