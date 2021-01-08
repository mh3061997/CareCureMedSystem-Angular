
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ResDoctor} from 'src/app/interfaces/res-doctor';
import { ResPackageBase } from 'src/app/interfaces/res-package-base';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-packagebase-update-information-dialog',
  templateUrl: './packagebase-update-information-dialog.component.html',
  styleUrls: ['./packagebase-update-information-dialog.component.css']
})
export class PackagebaseUpdateInformationDialogComponent implements OnInit {

  
  packageBase:ResPackageBase;
  specialities:string[];

  @ViewChild('updateInfoForm', { static: false }) updateInfoForm: NgForm;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{packageBase:ResPackageBase},
              public dialogRef: MatDialogRef<PackagebaseUpdateInformationDialogComponent>,
              private servPackageBase:ServPackageBaseService,
              private servUtils:ServUtilitiesService) {
                
    this.packageBase=data.packageBase;
    this.specialities = this.servUtils.specialities;
  }
              
  updatePackageBaseInformation(updatedPackage:ResPackageBase){
    
   // console.log(this.updateInfoForm);

    this.servPackageBase.updatePackageBase(updatedPackage).subscribe(response =>{

      this.dialogRef.close();

    });
  }
   
   

  onUpdateInfoSubmit(){
    this.packageBase.name=this.updateInfoForm.value.name;
    this.packageBase.dateExpired=this.updateInfoForm.value.dateExpired;
    this.packageBase.status=this.updateInfoForm.value.status;
    this.packageBase.price=this.updateInfoForm.value.price;
    this.packageBase.unitTotal=this.updateInfoForm.value.units;
    this.packageBase.type=this.updateInfoForm.value.type;

    this.updatePackageBaseInformation(this.packageBase);
  }

  ngOnInit(): void {
    
  }


}




