
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ResDoctor} from 'src/app/interfaces/res-doctor';
import { ResDoctorDayAvail } from 'src/app/interfaces/res-doctor-day-avail';
import { ResTimeDecomposed } from 'src/app/interfaces/res-time-decomposed';
import { ServDoctorDayAvailService } from 'src/app/services/serv-doctor-day-avail.service';
import { ServDoctorService } from 'src/app/services/serv-doctor.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-doctor-update-information-dialog',
  templateUrl: './doctor-update-information-dialog.component.html',
  styleUrls: ['./doctor-update-information-dialog.component.css']
})
export class DoctorUpdateInformationDialogComponent implements OnInit {

  doctor:ResDoctor;
  specialities:string[];
  timeIntervals:ResTimeDecomposed[];


  saturday:ResDoctorDayAvail;
  saturdayStartDecomposed:ResTimeDecomposed;
  saturdayEndDecomposed:ResTimeDecomposed;

  sunday:ResDoctorDayAvail;
  sundayStartDecomposed:ResTimeDecomposed;
  sundayEndDecomposed:ResTimeDecomposed;

  monday:ResDoctorDayAvail;
  mondayStartDecomposed:ResTimeDecomposed;
  mondayEndDecomposed:ResTimeDecomposed;

  tuesday:ResDoctorDayAvail;
  tuesdayStartDecomposed:ResTimeDecomposed;
  tuesdayEndDecomposed:ResTimeDecomposed;

  wednesday:ResDoctorDayAvail;
  wednesdayStartDecomposed:ResTimeDecomposed;
  wednesdayEndDecomposed:ResTimeDecomposed;

  thursday:ResDoctorDayAvail;
  thursdayStartDecomposed:ResTimeDecomposed;
  thursdayEndDecomposed:ResTimeDecomposed;

  friday:ResDoctorDayAvail;
  fridayStartDecomposed:ResTimeDecomposed;
  fridayEndDecomposed:ResTimeDecomposed;


  @ViewChild('updateInfoForm', { static: false }) updateInfoForm: NgForm;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data:{doctor:ResDoctor},
              public dialogRef: MatDialogRef<DoctorUpdateInformationDialogComponent>,
              private servDoctor:ServDoctorService,
              private servUtils:ServUtilitiesService,
              private servDoctorDayAvail:ServDoctorDayAvailService) {
                
    this.doctor=data.doctor;
    this.specialities = this.servUtils.specialities;
    this.timeIntervals = servUtils.getTimeIntervals();
   
    this.saturday =  this.getDay('saturday');
    if(this.saturday){
      this.saturdayStartDecomposed = this.servUtils.decomposeDoctorDayAvail(this.saturday,'start');
      this.saturdayEndDecomposed = this.servUtils.decomposeDoctorDayAvail(this.saturday,'end');
    }

    this.sunday =  this.getDay('sunday');
    if(this.sunday){
      this.sundayStartDecomposed = this.servUtils.decomposeDoctorDayAvail(this.sunday,'start');
      this.sundayEndDecomposed = this.servUtils.decomposeDoctorDayAvail(this.sunday,'end');
    }

    this.monday =  this.getDay('monday');
    if(this.monday){
      this.mondayStartDecomposed = this.servUtils.decomposeDoctorDayAvail(this.monday,'start');
      this.mondayEndDecomposed = this.servUtils.decomposeDoctorDayAvail(this.monday,'end');
    }

    this.tuesday =  this.getDay('tuesday');
    if(this.tuesday){
      this.tuesdayStartDecomposed = this.servUtils.decomposeDoctorDayAvail(this.tuesday,'start');
      this.tuesdayEndDecomposed = this.servUtils.decomposeDoctorDayAvail(this.tuesday,'end');
    }

    this.wednesday =  this.getDay('wednesday');
    if(this.wednesday){
      this.wednesdayStartDecomposed = this.servUtils.decomposeDoctorDayAvail(this.wednesday,'start');
      this.wednesdayEndDecomposed = this.servUtils.decomposeDoctorDayAvail(this.wednesday,'end');
    }

    this.thursday =  this.getDay('thursday');
    if(this.thursday){
      this.thursdayStartDecomposed = this.servUtils.decomposeDoctorDayAvail(this.thursday,'start');
      this.thursdayEndDecomposed = this.servUtils.decomposeDoctorDayAvail(this.thursday,'end');
    }

    this.friday =  this.getDay('friday');
    if(this.friday){
      this.fridayStartDecomposed = this.servUtils.decomposeDoctorDayAvail(this.friday,'start');
      this.fridayEndDecomposed = this.servUtils.decomposeDoctorDayAvail(this.friday,'end');
    }
   

       //to disable intended dialog action to fire on backclick
    //i return false and check it on parent to execute afterclosed action or not
    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
     // console.log("backclick")
     });
  }
              
  updateDoctorInformation(updatedDoctor:ResDoctor){
    
   // console.log(this.updateInfoForm.value);

    this.servDoctor.updateDoctor(updatedDoctor).subscribe(response =>{

     this.servDoctorDayAvail.updateDoctorDayAvailMulti(this.doctor.code,this.recomposeDoctorDayAvail()).subscribe(()=>{
       this.dialogRef.close(true);
     });
    });
  }
   
   

  onUpdateInfoSubmit(){
    this.doctor.name=this.updateInfoForm.value.name;
    this.doctor.age=this.updateInfoForm.value.age;
    this.doctor.gender=this.updateInfoForm.value.gender;
    this.doctor.email=this.updateInfoForm.value.email;
    this.doctor.mobile=this.updateInfoForm.value.mobile;
    this.doctor.speciality=this.updateInfoForm.value.speciality;
    this.doctor.priceRevisit=this.updateInfoForm.value.priceRevisit;
    this.doctor.priceVisit=this.updateInfoForm.value.priceVisit;

    this.updateDoctorInformation(this.doctor);
  }

  ngOnInit(): void {
    
  }


  getDay(dayString:string){

    return this.doctor.availableDays.filter(dayAvail =>dayAvail.day == dayString)[0];
  }


  compareTimeDecomposedObjects(Obj1 :ResTimeDecomposed,Obj2:ResTimeDecomposed){
    
    if(!Obj1 || !Obj2) 
    return false;
    return Obj1.AMPM === Obj2.AMPM && Obj1.hour === Obj2.hour && Obj1.minute ===Obj2.minute

  }


  

  recomposeDoctorDayAvail():ResDoctorDayAvail[]{
    
    let dayArr:ResDoctorDayAvail[] =[];
    
    if(this.updateInfoForm.value.sundaycheck){

      const sunday:ResDoctorDayAvail={
        code:0,
        day:'sunday',
        startTimeAMPM:this.sundayStartDecomposed.AMPM,
        startTimeHour:this.sundayStartDecomposed.hour,
        startTimeMinute:this.sundayStartDecomposed.minute,
        endTimeAMPM:this.sundayEndDecomposed.AMPM,
        endTimeHour:this.sundayEndDecomposed.hour,
        endTimeMinute:this.sundayEndDecomposed.minute,
        doctor:this.doctor
      }
      dayArr.push(sunday);
  
    }
    if(this.updateInfoForm.value.mondaycheck){

      const monday:ResDoctorDayAvail={
        code:0,
        day:'monday',
        startTimeAMPM:this.mondayStartDecomposed.AMPM,
        startTimeHour:this.mondayStartDecomposed.hour,
        startTimeMinute:this.mondayStartDecomposed.minute,
        endTimeAMPM:this.mondayEndDecomposed.AMPM,
        endTimeHour:this.mondayEndDecomposed.hour,
        endTimeMinute:this.mondayEndDecomposed.minute,
        doctor:this.doctor
      }
      dayArr.push(monday);   

    }
    if(this.updateInfoForm.value.tuesdaycheck){

      const tuesday:ResDoctorDayAvail={
        code:0,
        day:'tuesday',
        startTimeAMPM:this.tuesdayStartDecomposed.AMPM,
        startTimeHour:this.tuesdayStartDecomposed.hour,
        startTimeMinute:this.tuesdayStartDecomposed.minute,
        endTimeAMPM:this.tuesdayEndDecomposed.AMPM,
        endTimeHour:this.tuesdayEndDecomposed.hour,
        endTimeMinute:this.tuesdayEndDecomposed.minute,
        doctor:this.doctor
      }
      dayArr.push(tuesday);

    }

   

    if(this.updateInfoForm.value.wednesdaycheck){

      const wednesday:ResDoctorDayAvail={
        code:0,
        day:'wednesday',
        startTimeAMPM:this.wednesdayStartDecomposed.AMPM,
        startTimeHour:this.wednesdayStartDecomposed.hour,
        startTimeMinute:this.wednesdayStartDecomposed.minute,
        endTimeAMPM:this.wednesdayEndDecomposed.AMPM,
        endTimeHour:this.wednesdayEndDecomposed.hour,
        endTimeMinute:this.wednesdayEndDecomposed.minute,
        doctor:this.doctor
      }
      dayArr.push(wednesday);

    }

   
    if(this.updateInfoForm.value.thursdaycheck){
      

      const thursday:ResDoctorDayAvail={
        code:0,
        day:'thursday',
        startTimeAMPM:this.thursdayStartDecomposed.AMPM,
        startTimeHour:this.thursdayStartDecomposed.hour,
        startTimeMinute:this.thursdayStartDecomposed.minute,
        endTimeAMPM:this.thursdayEndDecomposed.AMPM,
        endTimeHour:this.thursdayEndDecomposed.hour,
        endTimeMinute:this.thursdayEndDecomposed.minute,
        doctor:this.doctor
      }
      dayArr.push(thursday);
      
    }

    
    if(this.updateInfoForm.value.fridaycheck){

      const friday:ResDoctorDayAvail={
        code:0,
        day:'friday',
        startTimeAMPM:this.fridayStartDecomposed.AMPM,
        startTimeHour:this.fridayStartDecomposed.hour,
        startTimeMinute:this.fridayStartDecomposed.minute,
        endTimeAMPM:this.fridayEndDecomposed.AMPM,
        endTimeHour:this.fridayEndDecomposed.hour,
        endTimeMinute:this.fridayEndDecomposed.minute,
        doctor:this.doctor
      }
      dayArr.push(friday);

    }

   
    if(this.updateInfoForm.value.saturdaycheck){

      const saturday:ResDoctorDayAvail={
        code:0,
        day:'saturday',
        startTimeAMPM:this.saturdayStartDecomposed.AMPM,
        startTimeHour:this.saturdayStartDecomposed.hour,
        startTimeMinute:this.saturdayStartDecomposed.minute,
        endTimeAMPM:this.saturdayEndDecomposed.AMPM,
        endTimeHour:this.saturdayEndDecomposed.hour,
        endTimeMinute:this.saturdayEndDecomposed.minute,
        doctor:this.doctor
      }
      dayArr.push(saturday);

    }

   

    return dayArr;
   

  }
}

