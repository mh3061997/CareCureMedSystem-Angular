import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ResAppointment } from 'src/app/interfaces/res-appointment';
import { ResDoctor } from 'src/app/interfaces/res-doctor';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServAppointmentService } from 'src/app/services/serv-appointment.service';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-appointment-update-information-dialog',
  templateUrl: './appointment-update-information-dialog.component.html',
  styleUrls: ['./appointment-update-information-dialog.component.css']
})
export class AppointmentUpdateInformationDialogComponent implements OnInit,AfterViewInit {

  appointment:ResAppointment;
  specialities:string[];
  doctors:ResDoctor[];
  doctorFormControl:FormControl;
  filtereddoctors: Observable<ResDoctor[]>;


  @ViewChild('updateInfoForm', { static: false }) updateInfoForm: NgForm;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{appointment:ResAppointment},
              public dialogRef: MatDialogRef<AppointmentUpdateInformationDialogComponent>,
              private servAppointment:ServAppointmentService,
              private servUtils:ServUtilitiesService,
              private servDoctor:ServDoctorService,
              private cdRef: ChangeDetectorRef) {
                
    this.appointment=data.appointment;
    this.doctorFormControl = new FormControl(this.appointment.doctor);
    this.specialities = this.servUtils.specialities;
    console.log(this.doctorFormControl);
  
    //to disable intended dialog action to fire on backclick
    //i return false and check it on parent to execute afterclosed action or not
    dialogRef.backdropClick().subscribe(result => {
     dialogRef.close(false);
    // console.log("backclick")
    });

  }
  ngAfterViewInit(){
    // this.updateInfoForm.form.patchValue({"doctor":this.appointment.doctor.name});
    // this.doctorFormControl.patchValue({"doctor":this.appointment.doctor.name});
    this.cdRef.detectChanges();

  }
  updateAppointmentInformation(updatedAppointment:ResAppointment){
    
   // console.log(this.updateInfoForm);

    this.servAppointment.updateAppointment(updatedAppointment).subscribe(response =>{

      this.dialogRef.close(true);

    });
    
  }
   
   

  onUpdateInfoSubmit(){

    this.appointment.notes=this.updateInfoForm.value.notes;
    this.appointment.speciality=this.updateInfoForm.value.speciality;
    this.appointment.type=this.updateInfoForm.value.type;
    const timeZoneOffset = new Date().getTimezoneOffset()*60*1000;
    let dateToVisit = new Date(this.updateInfoForm.value.dateToVisit);
    timeZoneOffset >0 ? dateToVisit.setTime(dateToVisit.getTime() + timeZoneOffset) : dateToVisit.setTime(dateToVisit.getTime() - timeZoneOffset);

    this.appointment.dateToVisit=dateToVisit.toISOString();
    this.appointment.doctor=this.doctorFormControl.value;

    //to prevent nulls
   if(this.appointment.invoice){
     delete this.appointment.invoice;
   }
  

    console.log(this.appointment);
    
     this.updateAppointmentInformation(this.appointment);
  }

  
  onSpecialityChange(event:MatSelectChange){
      
    this.servDoctor.getDoctorsBySpeciality(event.value).subscribe(doctors =>{
    
      console.log("doctors",typeof(doctors[0]));
    if(doctors){
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

checkAddAppointmentFormValidity():boolean{
    
  const check =   typeof(this.doctorFormControl.value) == 'object' ? true :  false;
   return check;
 }

}
