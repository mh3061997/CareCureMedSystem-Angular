import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ResPackageBase } from 'src/app/interfaces/res-package-base';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-package-add-new-dialog',
  templateUrl: './package-add-new-dialog.component.html',
  styleUrls: ['./package-add-new-dialog.component.css']
})
export class PackageAddNewDialogComponent implements OnInit {
  
  @ViewChild('newPackageBaseForm', { static: false }) newPackageBaseForm: NgForm;

  types:string[];

  constructor(
    public dialogRef: MatDialogRef<PackageAddNewDialogComponent>,
    private servPackageBase:ServPackageBaseService,
    private serUtils:ServUtilitiesService) {
      
      this.types=this.serUtils.specialities;

      dialogRef.backdropClick().subscribe(result => {
        dialogRef.close(false);
       // console.log("backclick")
       });

    }
  
  ngOnInit(): void {
  }


  
  dateCreation = new FormControl(new Date().toISOString());
  dateExpiration = new FormControl(new Date().toISOString());

onNewPackageSubmit(){

  console.log(this.newPackageBaseForm.value);
  const newPackageBase:ResPackageBase = {
    code:0, //code must ALWAYS be 0 when inserting bec. it wont insert if code is existing and 
    //it starts from 1 so 0 always available
    name:this.newPackageBaseForm.value.name,
    dateCreated:(new Date()).toISOString(), //in correct format after install moment.js
    // dateExpired:this.newPackageBaseForm.value.dateExpired.toISOString(),
    status:"Ongoing",
    price:this.newPackageBaseForm.value.price,
    unitTotal:this.newPackageBaseForm.value.unitTotal,
    type:this.newPackageBaseForm.value.type,
    memberships:[]
  }
  
  this.servPackageBase.addPackageBase(newPackageBase).subscribe(response =>{
    this.dialogRef.close(true);
  })
}

}

  


