import { Injectable } from '@angular/core';
import { ResDoctorDayAvail } from '../interfaces/res-doctor-day-avail';
import { ResReservedTime } from '../interfaces/res-reserved-time';
import { ResTimeDecomposed } from '../interfaces/res-time-decomposed';

@Injectable({
  providedIn: 'root'
})
export class ServUtilitiesService {

  
  weekdays = {
    sunday:0,
    monday:1,
    tuesday:2,
    wednesday:3,
    thursday:4,
    friday:5,
    saturday:6
  }
  specialities: string[] = ['Surgery', 'Plastic Surgery', 'Dermatology', 'Nutrition', 'Internal Medicine',
    'Obstetrics', 'Dentistry'];
  constructor() { }

  public formatDateTime(dateString: string): string {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleString('en-US', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour12: true, hour: "2-digit", minute: "2-digit", timeZone: "Africa/Cairo" });
  }

  public formatDate(dateString: string): string {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleString('en-US', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: "Africa/Cairo" })

  }

  public getWeekDayString(date:Date):string{
    return date.toLocaleDateString('en-US',{weekday:'long'}).toLowerCase();
  }
  public getTimeIntervals(): ResTimeDecomposed[] {
    const intervals = ['00', '30'];
    const AMPM = ['AM', 'PM'];
    const hours = ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
    let times: ResTimeDecomposed[] = [];
    AMPM.forEach(hour12 => {
      hours.forEach(hour => {
        intervals.forEach(interval => {
          times.push({
            hour: hour,
            minute: interval,
            AMPM: hour12
          });
        })
      });
    });
    return times;
  }

  createDateTimeObject(date: string, time: ResTimeDecomposed): string {

    let dateObj = new Date(date);

    if (time.AMPM == 'PM' && time.hour != '12') {

      dateObj.setHours(parseInt(time.hour) + 12);
      dateObj.setMinutes(parseInt(time.minute));

    } else if (time.AMPM == 'AM' && time.hour == '12') {

      dateObj.setHours(parseInt(time.hour) - 12);
      dateObj.setMinutes(parseInt(time.minute));

    } else {
      dateObj.setHours(parseInt(time.hour));
      dateObj.setMinutes(parseInt(time.minute));

    }
    return dateObj.toISOString();
  }
  getDecomposedTimeFromDateObj(reservedTimes: ResReservedTime[]) {

    let reservedDecomposedTime: ResTimeDecomposed[] = [];

    reservedTimes.forEach(date => {
      let dateObj = new Date(date.dateToVisit);
      let timeString = dateObj.toLocaleString().split(', ')[1];
      console.log(dateObj.toLocaleString());
      
      let hour = timeString.split(":")[0];
      if(hour.length==1)
      hour = "0"+hour;
      let minute=timeString.split(":")[1];
      let AMPM = timeString.split(":")[2].split(" ")[1]
      
      reservedDecomposedTime.push({hour:hour,minute:minute,AMPM:AMPM});
    });
    console.log("decomposed ",reservedDecomposedTime)
    return reservedDecomposedTime;
  }

  
  decomposeDoctorDayAvail(day:ResDoctorDayAvail,type:string):ResTimeDecomposed{

    if(type=='start'){
      return {hour:day.startTimeHour,minute:day.startTimeMinute,AMPM:day.startTimeAMPM}
    }else{
      return {hour:day.endTimeHour,minute:day.endTimeMinute,AMPM:day.endTimeAMPM}
  
    }
    }
    
}

