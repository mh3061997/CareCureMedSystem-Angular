import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ResPackageBase } from 'src/app/interfaces/res-package-base';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';
import { ResMembership } from 'src/app/interfaces//res-membership';
import { ServMembershipService } from 'src/app/services/serv-membership.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { ServInvoiceItemService } from 'src/app/services/serv-invoice-item.service';
import { ServInvoiceService } from 'src/app/services/serv-invoice.service';
import { ResInvoiceItem } from 'src/app/interfaces/res-invoice-item';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-add-membership-dialog',
  templateUrl: './patient-add-membership-dialog.component.html',
  styleUrls: ['./patient-add-membership-dialog.component.css'],
})
export class PatientAddMembershipDialogComponent implements OnInit {
  packageBases: ResPackageBase[];
  patient: ResPatient;
  showSpinner = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { patient: ResPatient },
    public dialogRef: MatDialogRef<PatientAddMembershipDialogComponent>,
    private servPackageBase: ServPackageBaseService,
    private servMemberships: ServMembershipService,
    private servInvoice: ServInvoiceService,
    private servInvoiceItem: ServInvoiceItemService,
    private router: Router
  ) {
    this.patient = data.patient;

    servPackageBase.getPackageBasesByStatus('Ongoing').subscribe((packages) => {
      this.packageBases = packages;
    });

    dialogRef.backdropClick().subscribe((result) => {
      dialogRef.close(false);
      // console.log("backclick")
    });
  }

  addMembership(packageBaseChosen: ResPackageBase) {
    this.showSpinner = true;
    const newMembership: ResMembership = {
      code: 0,
      dateSubscriped: new Date().toISOString(),
      usedAmount: 0,
      remainingAmount: packageBaseChosen.unitTotal,
      patient: this.patient,
      packageBase: packageBaseChosen,
    };

    this.servMemberships.addMembership(newMembership).subscribe((response) => {
      this.CreateInvoice(packageBaseChosen);

      this.dialogRef.close(true);
    });
  }

  CreateInvoice(packageBaseChosen: ResPackageBase) {
    let newInvoice: ResInvoice = {
      code: 0,
      dateCreated: new Date().toISOString(),
      dateFinalized: new Date().toISOString(),
      discount: 0,
      invoiceItems: [],
      paymentMethod: '',
      status: 'Not Paid',
      totalAfterDiscount: 0,
      totalDue: 0,
      totalPaid: 0,
      totalRemaining: 0,
      patientMembershipSubscriber: this.patient,
    };

    this.servInvoice.addInvoice(newInvoice).subscribe((invoiceWithCode) => {
      newInvoice = invoiceWithCode;
      this.CreateInvoiceItem(newInvoice, packageBaseChosen);
    });
  }

  private CreateInvoiceItem(
    newInvoice: ResInvoice,
    packageBaseChosen: ResPackageBase
  ) {
    const item: ResInvoiceItem = {
      code: 0,
      price: packageBaseChosen.price,
      name: packageBaseChosen.name,
      invoice: newInvoice,
    };
    this.servInvoiceItem.addInvoiceItem(item).subscribe(() => {
      this.showSpinner = false;
      this.router.navigate(['admin', 'invoice', newInvoice.code]);
    });
  }

  ngOnInit(): void {}
}
