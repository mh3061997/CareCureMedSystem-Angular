import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResPackageBase } from 'src/app/interfaces/res-package-base';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { PackagebaseUpdateInformationDialogComponent } from './packagebase-update-information-dialog/packagebase-update-information-dialog.component';

@Component({
  selector: 'app-packagebase',
  templateUrl: './packagebase.component.html',
  styleUrls: ['./packagebase.component.css']
})
export class PackagebaseComponent implements OnInit {
  
  packageCode:number;
  packageBase:ResPackageBase;

  constructor(public dialogUpdatePackage:MatDialog,
    private currentRoute:ActivatedRoute,
    private servPackageBase:ServPackageBaseService,
    public servUtils:ServUtilitiesService) {

    this.getPackageCode();

    servPackageBase.getPackageBaseByID(this.packageCode).subscribe(packageBase =>{

    this.packageBase = packageBase;
   
    });
  }

  private getPackageCode(){
  this.packageCode = this.currentRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }
 
  
  openUpdatePackageInformationDialog(){
    const dialogRef =  this.dialogUpdatePackage.open(PackagebaseUpdateInformationDialogComponent,{
       data:{
         packageBase:this.packageBase
       },
       disableClose:true
     });
   
     dialogRef.afterClosed().subscribe(closed =>{
    
  if(closed){
    this.servPackageBase.getPackageBaseByID(this.packageCode).subscribe(packageBase =>{
 
      this.packageBase = packageBase;
      });
  }
 
     });
   
   }
}
