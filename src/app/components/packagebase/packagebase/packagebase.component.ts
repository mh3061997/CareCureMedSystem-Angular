import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ResPackageBase } from 'src/app/interfaces/res-package-base';
import { ServPackageBaseService } from 'src/app/services/serv-package-base.service';

@Component({
  selector: 'app-packagebase',
  templateUrl: './packagebase.component.html',
  styleUrls: ['./packagebase.component.css']
})
export class PackagebaseComponent implements OnInit {
  
  packageCode:number;
  packageBase:ResPackageBase;

  constructor(public dialogAddMembership:MatDialog,public dialogUpdatePatientInformation:MatDialog,private currentRoute:ActivatedRoute,private servPackageBase:ServPackageBaseService) {

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
 
}
