import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ServPatientService } from 'src/app/services/serv-patient.service';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { MatSelectChange } from '@angular/material/select';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { ResTimeDecomposed } from 'src/app/interfaces/res-time-decomposed';
import { ResDoctorDayAvail } from 'src/app/interfaces/res-doctor-day-avail';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContactService } from '../../services/contact.service';
import { ResContactAppointment } from 'src/app/interfaces/res-contact-appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-client-dialog',
  templateUrl: './appointment-client-dialog.component.html',
  styleUrls: ['./appointment-client-dialog.component.css']
})
export class AppointmentClientDialogComponent implements OnInit {


  @ViewChild('newAppointmentForm', { static: false }) newAppointmentForm: NgForm;

  doctors: ResDoctor[];
  patientFormControl = new FormControl();
  doctorFormControl = new FormControl();

  filteredpatients: Observable<ResPatient[]>;
  filtereddoctors: Observable<ResDoctor[]>;

  specialities: string[] = [];
  timeIntervals: ResTimeDecomposed[];
  reservedDoctorTimes: ResTimeDecomposed[];


  isReserveYourself=false;
  isContactDone=false;
  isReserveYourselfDone=false;

  constructor(
    public dialogRef: MatDialogRef<AppointmentClientDialogComponent>,
    private servAppointment: ServAppointmentService,
    private servDoctor: ServDoctorService,
    private servUtils: ServUtilitiesService,
    public servAuth: AuthService,
    private servContact:ContactService,
    private router:Router) {


    
   
    this.specialities = servUtils.specialities;

    //to disable intended dialog action to fire on backclick
    //i return false and check it on parent to execute afterclosed action or not
    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
      // console.log("backclick")
    });
    this.timeIntervals = this.servUtils.getTimeIntervals();

  }

  sendContactAppointmentEmail(contactAppointmentFormValue:any){
  let contactAppointmentDataDTO :ResContactAppointment = {
    name:contactAppointmentFormValue.nameContact,
    mobile:contactAppointmentFormValue.mobileNumberContact,
    speciality:contactAppointmentFormValue.specialityContact,
    doctorName:this.doctorFormControl.value.name

  }
  
  this.servContact.sendContactAppointmentEmail(contactAppointmentDataDTO).subscribe(()=>{
    this.isContactDone=true;

    setTimeout(() => {
      this.dialogRef.close(true);
    }, 4000);

  });
    
  }
  
  isloggedin() {
    return this.servAuth.isUserLoggedIn();
  }

  onSpecialityChange(event: MatSelectChange) {
    //clear existing selected doctor
    this.doctorFormControl.reset();

    this.servDoctor.getDoctorsBySpeciality(event.value).subscribe(doctors => {

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

  displayFnPatient(patient: ResPatient): string {
    return patient && patient.name ? patient.name : '';
  }


  onNewAppointmentSubmit() {
    const dateToVisit = this.servUtils.createDateTimeObject(this.newAppointmentForm.value.dateToVisit.toISOString(), this.newAppointmentForm.value.timeToVisit);
    
    const newAppointment: ResAppointment = {
      code: 0, //code must ALWAYS be 0 when inserting bec. it wont insert if code is existing and 
      //it starts from 1 so 0 always available
      speciality: this.newAppointmentForm.value.speciality,
      dateCreated: new Date().toISOString(),
      dateToVisit: dateToVisit,
      type: this.newAppointmentForm.value.type,
      notes: "Self-Reserved By Patient",
      patient: {code:+this.servAuth.getLoggedInPatientCode(),age:0,appointments:[],email:"",gender:"",medImages:[],memberships:[],mobile:"",name:"",notes:"",totalDebt:0},
      doctor: this.doctorFormControl.value,
      status: "Reserved"
    }

    console.log(newAppointment);

    this.servAppointment.addAppointment(newAppointment).subscribe(response => {
      this.isReserveYourselfDone=true;

      setTimeout(() => {
        this.dialogRef.close(true);
      }, 4000);

    });

  }

  checkAddAppointmentFormValidity(): boolean {

    const check = typeof (this.patientFormControl.value) == 'object' && typeof (this.doctorFormControl.value) == 'object' ? true : false;
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
    const date: Date = this.newAppointmentForm.value.dateToVisit;
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

  toggleReserveYourself(){
    if(this.isloggedin()){
      this.isReserveYourself=true;
    }else{
      this.dialogRef.close(false);
      this.router.navigate(['login-client']);
    }
    console.log(this.isReserveYourself);
    
  }
 
}







