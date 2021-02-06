import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';
import { MatDialog } from '@angular/material/dialog';
import { FinalizedInvoiceDialogComponent } from './finalized-invoice-dialog/finalized-invoice-dialog.component';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { AddCustomItemDialogComponent } from './add-custom-item-dialog/add-custom-item-dialog.component';
import { ResInvoiceItem } from 'src/app/interfaces/res-invoice-item';
import { SettleDebtDialogComponent } from './settle-debt-dialog/settle-debt-dialog.component';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: ResInvoice;
  invoiceId: number;
  debtDeductionTotal: number = 0;
  totalDebt: number;
  
  constructor(private currentRoute: ActivatedRoute,
    private router: Router,
    private servInvoice: ServInvoiceService,
    public dialogFinalizeInvoice: MatDialog,
    public dialogAddCustomInvoiceItem: MatDialog,
    public SettleDebtDialogComponent: MatDialog,
    public servUtils: ServUtilitiesService,
    public servPatient: ServPatientService,
    public cdRef:ChangeDetectorRef) {

    this.getInvoiceCode();

    this.getInvoice();
  }

 
  private getInvoiceCode() {
    this.invoiceId = this.currentRoute.snapshot.params['id'];
  }

  public getInvoice() {
    this.servInvoice.getInvoiceByID(this.invoiceId).subscribe(invoice => {

      this.invoice = invoice;
     if(invoice.appointment){
      this.totalDebt = invoice.appointment.patient.totalDebt;
     }
      this.invoice.invoiceItems
        .filter(item => { return item.name == "Settle Debt" })
        .forEach(item => {
          this.totalDebt -= item.price;
          //console.log(this.totalDebt)
          this.cdRef.detectChanges();

        });
    });
  }

  goToAppointment(code: number) {
    this.router.navigate(['appointment', code.toString()])
  }

  openFinalizedInvoiceDialog() {
    const dialogRef = this.dialogFinalizeInvoice.open(FinalizedInvoiceDialogComponent, {
      data: {
        invoice: this.invoice
      },
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(closed => {

    if(closed){

  if(this.invoice.appointment){
    this.servPatient.settlePatientDebt(this.invoice.appointment.patient.code, this.debtDeductionTotal)
    .subscribe(res => {
      this.servInvoice.getInvoiceByID(this.invoiceId).subscribe(invoice => {

        this.invoice = invoice;
        this.cdRef.detectChanges();
       // console.log("new debt:",   this.invoice.appointment.patient.totalDebt);


      });
    
    });
  }

     
    }

    });

  }
  openFinalizedDebtDialog() {
    const dialogRef = this.SettleDebtDialogComponent.open(SettleDebtDialogComponent, {
      data: {
        invoice: this.invoice,
        totalDebt: this.totalDebt
      },
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(newDebtDeductionAmount => {

     if(newDebtDeductionAmount){
      this.debtDeductionTotal += newDebtDeductionAmount;
      this.totalDebt -= newDebtDeductionAmount;

      this.servInvoice.getInvoiceByID(this.invoiceId).subscribe(invoice => {

        this.invoice = invoice;
        this.cdRef.detectChanges();

      });
     }

    });

  }
  openAddCustomInvoiceItemDialog() {

    const dialogRef = this.dialogAddCustomInvoiceItem.open(AddCustomItemDialogComponent, {
      data: {
        invoice: this.invoice
      },
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(closed => {

     if(closed){
      this.servInvoice.getInvoiceByID(this.invoiceId).subscribe(invoice => {

        this.invoice = invoice;
        this.cdRef.detectChanges();

      });
     }

    });
  }
  ngOnInit(): void {
  }

}








