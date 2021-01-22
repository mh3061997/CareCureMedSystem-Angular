import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import { PatientAddNewDialogComponent} from 'src/app/components/patient/patient-add-new-dialog/patient-add-new-dialog.component'
import { ResPackageBase } from 'src/app/interfaces/res-package-base';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';
import { PackageAddNewDialogComponent } from './package-add-new-dialog/package-add-new-dialog.component';


@Component({
  selector: 'app-packagepage',
  templateUrl: './packagepage.component.html',
  styleUrls: ['./packagepage.component.css']
})
export class PackagepageComponent implements OnInit {

  packageBases:ResPackageBase[];

  constructor(public dialogAddPackage:MatDialog,private servPackageBase:ServPackageBaseService) { 
    servPackageBase.getPackageBasesAll().subscribe(packageBases =>{

      this.packageBases = packageBases;
    });
  }

  ngOnInit(): void {
  }


  openNewPackageDialog(){
    const dialogRef =  this.dialogAddPackage.open(PackageAddNewDialogComponent,{disableClose:true});
   
     dialogRef.afterClosed().subscribe(closed =>{
    
      if(closed){
        this.servPackageBase.getPackageBasesAll().subscribe(packages =>{
 
          this.packageBases = packages;
          });
      }
 
     });
   
   }

}

  
 


