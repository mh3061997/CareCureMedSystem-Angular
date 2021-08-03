import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { PathService } from 'src/app/services/path.service';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { AppointmentUpdateInformationDialogComponent } from './appointment-update-information-dialog/appointment-update-information-dialog.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  appointment: ResAppointment;
  appointmentId: number;

  patient: ResPatient;
  doctor: ResDoctor;
  appointmentsPatientDoctor: ResAppointment[];

  constructor(public dialogAddMembership: MatDialog,
    public dialogUpdateAppointmentInformation: MatDialog,
    private currentRoute: ActivatedRoute,
    private servAppointment: ServAppointmentService,
    private router: Router,
    public servUtils: ServUtilitiesService) {



    this.currentRoute.params.subscribe(params => {

      this.getAppointmentCode();

      servAppointment.getAppointmentByID(this.appointmentId).subscribe(appointment => {

        this.appointment = appointment;
        this.patient = appointment.patient;
        this.doctor = appointment.doctor;

        servAppointment.getAppointmentsPatientDoctor(this.patient.code, this.doctor.code)
          .subscribe((appointmentsPatientDoctor) => {

            this.appointmentsPatientDoctor = appointmentsPatientDoctor;

          });

      });

    });
  }

  private getAppointmentCode() {
    this.appointmentId = this.currentRoute.snapshot.params['id'];
  }


  goToDoctor() {
    // console.log(this.route);
    this.router.navigate(['admin', 'doctor', this.doctor.code.toString()]);
  }


  goToMedicalOps() {
    this.router.navigate(['admin', 'appointment', this.appointment.code.toString(), 'medops']);
  }

  goToPatient() {
    //console.log(this.route);
    this.router.navigate(['admin', 'patient', this.patient.code.toString()]);
  }
  ngOnInit(): void {
  }


  openUpdateAppointmentInformationDialog() {
    const dialogRef = this.dialogUpdateAppointmentInformation.open(AppointmentUpdateInformationDialogComponent, {
      data: {
        appointment: this.appointment
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(closed => {

      if (closed) {
        this.servAppointment.getAppointmentByID(this.appointmentId).subscribe(appointment => {

          this.appointment = appointment;
        });

      }
    });

  }
  showHistoryAccordion(): any {
    return this.appointment.complain ||
      this.appointment.presentIllnessHistory ||
      this.appointment.pastHistory ||
      this.appointment.drugHistory ||
      this.appointment.familyHistory ||
      this.appointment.lumpOrUlcerHistoryDuration ||
      this.appointment.lumpOrUlcerHistoryFirstSymptoms ||
      this.appointment.lumpOrUlcerHistoryOtherSymptoms ||
      this.appointment.lumpOrUlcerHistoryProgression ||
      this.appointment.lumpOrUlcerHistoryMultiplicity ||
      this.appointment.lumpOrUlcerHistoryCauses;
  }
  showExaminationAccordion(): any {



    return this.appointment.generalCondition ||
      this.appointment.vitalData ||
      this.appointment.chestExamination ||
      this.appointment.abdominalExamination ||
      this.appointment.localExaminationForUlcerAndLumpSite ||
      this.appointment.localExaminationForUlcerAndLumpShape ||
      this.appointment.localExaminationForUlcerAndLumpSize ||
      this.appointment.localExaminationForUlcerAndLumpColor ||
      this.appointment.localExaminationForUlcerAndLumpTemperature ||
      this.appointment.localExaminationForUlcerAndLumpTenderness ||
      this.appointment.localExaminationForUlcerAndLumpSurface ||
      this.appointment.localExaminationForUlcerAndLumpAge ||
      this.appointment.localExaminationForUlcerAndLumpConsistence ||
      this.appointment.localExaminationForUlcerAndLumpReducability ||
      this.appointment.localExaminationForUlcerAndLumpRelationToSurroundStructure ||
      this.appointment.localExaminationForUlcerAndLumpLymphDrainage ||
      this.appointment.breastExaminationAbnormalFindingsDuringBreastExam ||
      this.appointment.breastExaminationNippleDischarge ||
      this.appointment.breastExaminationSkinInvolvement ||
      this.appointment.breastExaminationAxillaryMass ||
      this.appointment.breastExaminationBreastMass ||
      this.appointment.breastExaminationMobileRight ||
      this.appointment.breastExaminationSize ||
      this.appointment.neckExamination;


  }
  showInvestigationsAccordion(): any {
    return this.appointment.lab ||
      this.appointment.radiology ||
      this.appointment.endoscopic ||
      this.appointment.biopsy;
  }
  showDiagnosesAccordion(): any {
    return this.appointment.provisionalDiagnoses ||
      this.appointment.finalDiagnosis ||
      this.appointment.planOfManagement ||
      this.appointment.operativeDetails ||
      this.appointment.postOperativeComplication;
  }

  showHistoryOfLumpOrUlcer(): any {
    return this.appointment.lumpOrUlcerHistoryDuration ||
      this.appointment.lumpOrUlcerHistoryFirstSymptoms ||
      this.appointment.lumpOrUlcerHistoryOtherSymptoms ||
      this.appointment.lumpOrUlcerHistoryProgression ||
      this.appointment.lumpOrUlcerHistoryMultiplicity ||
      this.appointment.lumpOrUlcerHistoryCauses;
  }
  showLocalExaminationForLumpOrUlcer(): any {
    return this.appointment.localExaminationForUlcerAndLumpSite ||
      this.appointment.localExaminationForUlcerAndLumpShape ||
      this.appointment.localExaminationForUlcerAndLumpSize ||
      this.appointment.localExaminationForUlcerAndLumpColor ||
      this.appointment.localExaminationForUlcerAndLumpTemperature ||
      this.appointment.localExaminationForUlcerAndLumpTenderness ||
      this.appointment.localExaminationForUlcerAndLumpSurface ||
      this.appointment.localExaminationForUlcerAndLumpAge ||
      this.appointment.localExaminationForUlcerAndLumpConsistence ||
      this.appointment.localExaminationForUlcerAndLumpReducability ||
      this.appointment.localExaminationForUlcerAndLumpRelationToSurroundStructure ||
      this.appointment.localExaminationForUlcerAndLumpLymphDrainage;
  }
  showBreastExamination(): any {
    return this.appointment.breastExaminationAbnormalFindingsDuringBreastExam ||
      this.appointment.breastExaminationNippleDischarge ||
      this.appointment.breastExaminationSkinInvolvement ||
      this.appointment.breastExaminationAxillaryMass ||
      this.appointment.breastExaminationBreastMass ||
      this.appointment.breastExaminationMobileRight ||
      this.appointment.breastExaminationSize;
  }

}
