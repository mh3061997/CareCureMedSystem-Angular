import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResPackageBase } from 'src/app/interfaces/res-package-base';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';
import { ResMembership } from 'src/app/interfaces//res-membership'
import { ServMembershipService } from 'src/app/services/serv-membership.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
@Component({
  selector: 'app-patient-add-membership-dialog',
  templateUrl: './patient-add-membership-dialog.component.html',
  styleUrls: ['./patient-add-membership-dialog.component.css']
})
export class PatientAddMembershipDialogComponent implements OnInit {

  packageBases: ResPackageBase[];
  patient: ResPatient;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { patient: ResPatient },
    public dialogRef: MatDialogRef<PatientAddMembershipDialogComponent>,
    private servPackageBase: ServPackageBaseService,
    private servMemberships: ServMembershipService) {

    console.log(data.patient);
    this.patient = data.patient;

    servPackageBase.getPackageBasesByStatus("Ongoing").subscribe(

      packages => {
        this.packageBases = packages;
      }

    );

    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
      // console.log("backclick")
    });


  }

  addMembership(packageBaseChosen: ResPackageBase) {

    const newMembership: ResMembership = {
      code: 0,
      dateSubscriped: new Date().toISOString(),
      usedAmount: 0,
      remainingAmount: packageBaseChosen.unitTotal,
      patient: this.patient,
      packageBase: packageBaseChosen
    };

    this.servMemberships.addMembership(newMembership).subscribe(response => {

      this.dialogRef.close(true);
    });
  }

  ngOnInit(): void {
  }

}
