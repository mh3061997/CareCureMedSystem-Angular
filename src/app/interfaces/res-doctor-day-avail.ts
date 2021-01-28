import { ResDoctor } from "./res-doctor";

export interface ResDoctorDayAvail {
    code:number,
    startTimeHour:string;
    startTimeMinute:string;
    startTimeAMPM:string;
    endTimeHour:string;
    endTimeMinute:string;
    endTimeAMPM:string;
    day:string;
    doctor?:ResDoctor;
    
}
