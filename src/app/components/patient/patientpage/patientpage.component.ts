import { Component, OnInit } from '@angular/core';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-patientpage',
  templateUrl: './patientpage.component.html',
  styleUrls: ['./patientpage.component.scss']
})
export class PatientpageComponent implements OnInit {
  
  patients:ResPatient[];

  constructor(servPatient:ServPatientService) { 
    servPatient.getPatientsAll().subscribe(patients =>{

      this.patients = patients;
    });
  }

  ngOnInit(): void {
  }

}
