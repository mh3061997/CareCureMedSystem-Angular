import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';

@Component({
  selector: 'app-invoicepage',
  templateUrl: './invoicepage.component.html',
  styleUrls: ['./invoicepage.component.css']
})
export class InvoicepageComponent implements OnInit {

  invoices: ResInvoice[];
  currentDate: Date = new Date();

  constructor(private servInvoice: ServInvoiceService) {

    this.servInvoice.getInvoicesAll().subscribe(invoices => {
      this.invoices = invoices;
    });
  }

  ngOnInit() {

  }

  onButtonToggleChange(event: MatButtonToggleChange) {
    // console.log(event);

    switch (event.value) {

      case 'All':

        this.servInvoice.getInvoicesAll().subscribe(invoices => {
          this.invoices = invoices;
        });
        break;
      case 'ByDate':
        this.servInvoice.getInvoicesByDate(this.currentDate).subscribe(dateInvoices => {
          this.invoices = dateInvoices;
        });
        break;
    }

  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    // console.log(event);

    if (event.value) {
      this.servInvoice.getInvoicesByDate(this.currentDate).subscribe(dateInvoices => {
        this.invoices = dateInvoices;
      });
    }

  }

}
