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
  
 

ngOnInit(){
  
}
  constructor(public dialogAddPatient:MatDialog,private servPatient:ServPatientService) { 
   
  }



  openNewPatientDialog(){
   this.dialogAddPatient.open(PatientAddNewDialogComponent);
   }

}
