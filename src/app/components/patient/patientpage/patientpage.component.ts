import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import { PatientAddNewDialogComponent} from 'src/app/components/patient/patient-add-new-dialog/patient-add-new-dialog.component'
@Component({
  selector: 'app-patientpage',
  templateUrl: './patientpage.component.html',
  styleUrls: ['./patientpage.component.scss']
})
export class PatientpageComponent implements OnInit {
  
  patients:ResPatient[];

  constructor(public dialogAddPatient:MatDialog,private servPatient:ServPatientService) { 
    servPatient.getPatientsAll().subscribe(patients =>{

      this.patients = patients;
    });
  }

  ngOnInit(): void {
  }


  openNewPatientDialog(){
    const dialogRef =  this.dialogAddPatient.open(PatientAddNewDialogComponent);
   
     dialogRef.afterClosed().subscribe(closed =>{
    
       this.servPatient.getPatientsAll().subscribe(patients =>{
 
         this.patients = patients;
         });
 
     });
   
   }

}
