import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ResDoctorDayAvail } from 'src/app/interfaces/res-doctor-day-avail';
import { ResTimeDecomposed } from 'src/app/interfaces/res-time-decomposed';
import { ServDoctorDayAvailService } from 'src/app/services/serv-doctor-day-avail.service';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-doctor-add-new-dialog',
  templateUrl: './doctor-add-new-dialog.component.html',
  styleUrls: ['./doctor-add-new-dialog.component.css']
})
export class DoctorAddNewDialogComponent implements OnInit {


  @ViewChild('newDoctorForm', { static: false }) newDoctorForm: NgForm;
  specialities: string[];

  timeIntervals: ResTimeDecomposed[];
  weekDays: { sunday: number, monday: number, tuesday: number, wednesday: number, thursday: number, friday: number, saturday: number };
  constructor(
    public dialogRef: MatDialogRef<DoctorAddNewDialogComponent>,
    private servDoctor: ServDoctorService,
    private servDoctorDaysAvail:ServDoctorDayAvailService,
    private servUtils: ServUtilitiesService) {

    this.specialities = servUtils.specialities;
    this.timeIntervals = servUtils.getTimeIntervals();
    this.weekDays = servUtils.weekdays;

    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
      // console.log("backclick")
    });
  }

  ngOnInit(): void {
  }

  getKeys(object: Object): string[] {
    return Object.keys(object);
  }
  onNewDoctorSubmit() {
    const newDoctor: ResDoctor = {
      code: 0, //code must ALWAYS be 0 when inserting bec. it wont insert if code is existing and 
      //it starts from 1 so 0 always available
      name: this.newDoctorForm.value.name,
      gender: this.newDoctorForm.value.gender,
      age: this.newDoctorForm.value.age,
      mobile: this.newDoctorForm.value.mobile,
      email: this.newDoctorForm.value.email,
      speciality: this.newDoctorForm.value.speciality,
      priceRevisit: this.newDoctorForm.value.priceRevisit,
      priceVisit: this.newDoctorForm.value.priceVisit,
      appointments: [],
      availableDays: []
    }



    this.servDoctor.addDoctor(newDoctor).subscribe(doctor => {

      let days: ResDoctorDayAvail[] = [];

      if (this.newDoctorForm.value.sundaycheck) {

        const day: ResDoctorDayAvail = {
          code: 0,
          day: 'sunday',
          endTimeHour: this.newDoctorForm.value.sundayEnd.hour,
          endTimeMinute: this.newDoctorForm.value.sundayEnd.minute,
          endTimeAMPM: this.newDoctorForm.value.sundayEnd.AMPM,
          startTimeHour: this.newDoctorForm.value.sundayStart.hour,
          startTimeMinute: this.newDoctorForm.value.sundayStart.minute,
          startTimeAMPM: this.newDoctorForm.value.sundayStart.AMPM,
          doctor: doctor
        }
      
        days.push(day);

      }


      if (this.newDoctorForm.value.mondaycheck) {
        const day: ResDoctorDayAvail = {
          code: 0,
          day: 'monday',
          endTimeHour: this.newDoctorForm.value.mondayEnd.hour,
          endTimeMinute: this.newDoctorForm.value.mondayEnd.minute,
          endTimeAMPM: this.newDoctorForm.value.mondayEnd.AMPM,
          startTimeHour: this.newDoctorForm.value.mondayStart.hour,
          startTimeMinute: this.newDoctorForm.value.mondayStart.minute,
          startTimeAMPM: this.newDoctorForm.value.mondayStart.AMPM,
          doctor: doctor
        }
      
        days.push(day);

      }

      if (this.newDoctorForm.value.tuesdaycheck) {
        const day: ResDoctorDayAvail = {
          code: 0,
          day: 'tuesday',
          endTimeHour: this.newDoctorForm.value.tuesdayEnd.hour,
          endTimeMinute: this.newDoctorForm.value.tuesdayEnd.minute,
          endTimeAMPM: this.newDoctorForm.value.tuesdayEnd.AMPM,
          startTimeHour: this.newDoctorForm.value.tuesdayStart.hour,
          startTimeMinute: this.newDoctorForm.value.tuesdayStart.minute,
          startTimeAMPM: this.newDoctorForm.value.tuesdayStart.AMPM,
          doctor: doctor
        }
      
        days.push(day);

      }
      if (this.newDoctorForm.value.wednesdaycheck) {
        const day: ResDoctorDayAvail = {
          code: 0,
          day: 'wednesday',
          endTimeHour: this.newDoctorForm.value.wednesdayEnd.hour,
          endTimeMinute: this.newDoctorForm.value.wednesdayEnd.minute,
          endTimeAMPM: this.newDoctorForm.value.wednesdayEnd.AMPM,
          startTimeHour: this.newDoctorForm.value.wednesdayStart.hour,
          startTimeMinute: this.newDoctorForm.value.wednesdayStart.minute,
          startTimeAMPM: this.newDoctorForm.value.wednesdayStart.AMPM,
          doctor: doctor
        }
      
        days.push(day);

      }
      if (this.newDoctorForm.value.thursdaycheck) {
        const day: ResDoctorDayAvail = {
          code: 0,
          day: 'thursday',
          endTimeHour: this.newDoctorForm.value.thursdayEnd.hour,
          endTimeMinute: this.newDoctorForm.value.thursdayEnd.minute,
          endTimeAMPM: this.newDoctorForm.value.thursdayEnd.AMPM,
          startTimeHour: this.newDoctorForm.value.thursdayStart.hour,
          startTimeMinute: this.newDoctorForm.value.thursdayStart.minute,
          startTimeAMPM: this.newDoctorForm.value.thursdayStart.AMPM,
          doctor: doctor
        }
      
        days.push(day);

      }
      if (this.newDoctorForm.value.fridaycheck) {
        const day: ResDoctorDayAvail = {
          code: 0,
          day: 'friday',
          endTimeHour: this.newDoctorForm.value.fridayEnd.hour,
          endTimeMinute: this.newDoctorForm.value.fridayEnd.minute,
          endTimeAMPM: this.newDoctorForm.value.fridayEnd.AMPM,
          startTimeHour: this.newDoctorForm.value.fridayStart.hour,
          startTimeMinute: this.newDoctorForm.value.fridayStart.minute,
          startTimeAMPM: this.newDoctorForm.value.fridayStart.AMPM,
          doctor: doctor
        }
      
        days.push(day);

      }
      if (this.newDoctorForm.value.saturdaycheck) {
        const day: ResDoctorDayAvail = {
          code: 0,
          day: 'saturday',
          endTimeHour: this.newDoctorForm.value.saturdayEnd.hour,
          endTimeMinute: this.newDoctorForm.value.saturdayEnd.minute,
          endTimeAMPM: this.newDoctorForm.value.saturdayEnd.AMPM,
          startTimeHour: this.newDoctorForm.value.saturdayStart.hour,
          startTimeMinute: this.newDoctorForm.value.saturdayStart.minute,
          startTimeAMPM: this.newDoctorForm.value.saturdayStart.AMPM,
          doctor: doctor
        }
      
        days.push(day);

      }
      //console.log(days);
      this.servDoctorDaysAvail.addDoctorDayAvailMulti(days).subscribe(()=>{

        this.dialogRef.close(true);

      });
    })
  }

}



