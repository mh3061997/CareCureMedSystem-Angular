import { Component, OnInit } from '@angular/core';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-my-history',
  templateUrl: './my-history.component.html',
  styleUrls: ['./my-history.component.css']
})
export class MyHistoryComponent implements OnInit {

  patient:ResPatient;
  patientCode:number;
  constructor(private patientService:ServPatientService,private authService:AuthService) {

      this.patientCode = authService.getLoggedInPatientCode();
    if(this.patientCode){
      this.patientService.getPatientByID(this.patientCode).subscribe(patient =>{
        this.patient = patient;
      })
    }
   }

  ngOnInit(): void {
  }

}
