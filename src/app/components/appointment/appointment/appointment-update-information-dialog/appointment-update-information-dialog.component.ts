import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ResDoctorDayAvail } from 'src/app/interfaces/res-doctor-day-avail';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ResTimeDecomposed } from 'src/app/interfaces/res-time-decomposed';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-appointment-update-information-dialog',
  templateUrl: './appointment-update-information-dialog.component.html',
  styleUrls: ['./appointment-update-information-dialog.component.css']
})
export class AppointmentUpdateInformationDialogComponent implements OnInit, AfterViewInit {

  appointment: ResAppointment;
  specialities: string[];
  doctors: ResDoctor[];
  doctorFormControl: FormControl;
  filtereddoctors: Observable<ResDoctor[]>;
  timeIntervals: ResTimeDecomposed[];
  reservedDoctorTimes: ResTimeDecomposed[];
  appointmentTime: ResTimeDecomposed;

  @ViewChild('updateInfoForm', { static: false }) updateInfoForm: NgForm;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { appointment: ResAppointment },
    public dialogRef: MatDialogRef<AppointmentUpdateInformationDialogComponent>,
    private servAppointment: ServAppointmentService,
    private servUtils: ServUtilitiesService,
    private servDoctor: ServDoctorService,
    private cdRef: ChangeDetectorRef) {

    this.appointment = data.appointment;
    this.doctorFormControl = new FormControl(this.appointment.doctor);
    this.specialities = this.servUtils.specialities;
    this.timeIntervals = this.servUtils.getTimeIntervals();

    this.servDoctor.getDoctorReservedTimes(this.doctorFormControl.value.code, this.appointment.dateToVisit).subscribe(
      reservedTimes => {
        this.reservedDoctorTimes = this.servUtils.getDecomposedTimeFromDateObj(reservedTimes);
      });

    this.appointmentTime = this.servUtils.getDecomposedTimeFromDateObj([{dateToVisit:this.appointment.dateToVisit}])[0];
    //console.log("reservedtimes ",reservedTimes);

    //console.log(this.doctorFormControl);

    //to disable intended dialog action to fire on backclick
    //i return false and check it on parent to execute afterclosed action or not
    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
      // console.log("backclick")
    });

  }
  ngAfterViewInit() {
    // this.updateInfoForm.form.patchValue({"doctor":this.appointment.doctor.name});
    // this.doctorFormControl.patchValue({"doctor":this.appointment.doctor.name});
    this.cdRef.detectChanges();

  }
  updateAppointmentInformation(updatedAppointment: ResAppointment) {

    // console.log(this.updateInfoForm);

    this.servAppointment.updateAppointment(updatedAppointment).subscribe(response => {

      this.dialogRef.close(true);

    });

  }



  onUpdateInfoSubmit() {
    const dateToVisit = this.servUtils.createDateTimeObject(this.updateInfoForm.value.dateToVisit,this.updateInfoForm.value.timeToVisit);

    this.appointment.notes = this.updateInfoForm.value.notes;
    this.appointment.speciality = this.updateInfoForm.value.speciality;
    this.appointment.type = this.updateInfoForm.value.type;
    
    this.appointment.dateToVisit = dateToVisit;
    this.appointment.doctor = this.doctorFormControl.value;

    //to prevent nulls
    if (this.appointment.invoice) {
      delete this.appointment.invoice;
    }


    console.log(this.appointment);

    this.updateAppointmentInformation(this.appointment);
  }


  onSpecialityChange(event: MatSelectChange) {

    this.servDoctor.getDoctorsBySpeciality(event.value).subscribe(doctors => {

      console.log("doctors", typeof (doctors[0]));
      if (doctors) {
        this.doctors = doctors;
        this.filtereddoctors = this.doctorFormControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filterDoctor(name) : this.doctors.slice())
          );
      }

    });

  }



  ngOnInit() {

  }


  displayFnDoctor(doctor: ResDoctor): string {
    return doctor && doctor.name ? doctor.name : '';
  }

  private _filterDoctor(name: string): ResDoctor[] {
    const filterValue = name.toLowerCase();

    return this.doctors.filter(doctor => doctor.name.toLowerCase().indexOf(filterValue) === 0);
  }

  checkAddAppointmentFormValidity(): boolean {

    const check = typeof (this.doctorFormControl.value) == 'object' ? true : false;
    return check;
  }


  onDateChange(date: Date | null) {


    if (this.doctorFormControl.value && date) {
      //console.log("here",date.toISOString());
      // console.log("form date ",date.toISOString());

      this.servDoctor.getDoctorReservedTimes(this.doctorFormControl.value.code, date.toISOString()).subscribe(
        reservedTimes => {
          this.reservedDoctorTimes = this.servUtils.getDecomposedTimeFromDateObj(reservedTimes);
          //console.log("reservedtimes ",reservedTimes);


        }
      );
    }

  }


  datePickerDoctorDaysFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Sunday and  Saturday from being selected.
    let dayMap = new Map();

    dayMap.set('sunday', 0);
    dayMap.set('monday', 1);
    dayMap.set('tuesday', 2);
    dayMap.set('wednesday', 3);
    dayMap.set('thursday', 4);
    dayMap.set('friday', 5);
    dayMap.set('saturday', 6);

    let dayAvailableMap = new Map();

    dayAvailableMap.set('0', 0);
    dayAvailableMap.set('1', 0);
    dayAvailableMap.set('2', 0);
    dayAvailableMap.set('3', 0);
    dayAvailableMap.set('4', 0);
    dayAvailableMap.set('5', 0);
    dayAvailableMap.set('6', 0);


    const doctor: ResDoctor = this.doctorFormControl.value;

    doctor.availableDays.forEach(dayAvail => {
      dayAvailableMap.set(dayMap.get(dayAvail.day), 1);
    });

    //console.log(dayAvailableMap,doctor.availableDays);

    return dayAvailableMap.get(day) == 1;
  }


  isTimeClash(time: ResTimeDecomposed): boolean {
    return this.reservedDoctorTimes.filter(doctorTime =>
      doctorTime.AMPM === time.AMPM && doctorTime.hour === time.hour && doctorTime.minute === time.minute
    ).length > 0;
  }

  isWithinWorkingHours(time: ResTimeDecomposed): boolean {
    const date: Date = new Date(this.updateInfoForm.value.dateToVisit);
    //console.log(this.servUtils.getWeekDayString(date));
    const doctor: ResDoctor = this.doctorFormControl.value;

    const day: ResDoctorDayAvail = doctor.availableDays.filter(day => day.day == this.servUtils.getWeekDayString(date))[0];

    const doctorStartTime = this.servUtils.decomposeDoctorDayAvail(day, 'start');
    const doctorEndTime = this.servUtils.decomposeDoctorDayAvail(day, 'end');


    const isWithin: boolean = this.timeIntervals.findIndex((interval) =>
      interval.hour === doctorStartTime.hour && interval.minute === doctorStartTime.minute && interval.AMPM === doctorStartTime.AMPM
    ) <= this.timeIntervals.indexOf(time)
      && this.timeIntervals.findIndex((interval) =>
        interval.hour === doctorEndTime.hour && interval.minute === doctorEndTime.minute && interval.AMPM === doctorEndTime.AMPM
      ) > this.timeIntervals.indexOf(time);


    return isWithin;
  }

  
  compareTimeDecomposedObjects(Obj1 :ResTimeDecomposed,Obj2:ResTimeDecomposed){

    return Obj1.AMPM === Obj2.AMPM && Obj1.hour === Obj2.hour && Obj1.minute ===Obj2.minute

  }
}
