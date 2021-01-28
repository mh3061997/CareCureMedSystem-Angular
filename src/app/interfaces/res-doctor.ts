import { ResAppointment } from "./res-appointment"
import { ResDoctorDayAvail } from "./res-doctor-day-avail";

export interface ResDoctor {
    code:number;
    name:string;
    mobile:string;
    email:string;
    priceVisit:number;
    priceRevisit:number;
    gender:string;
    age:number;
    speciality:string;
    appointments:ResAppointment[];
    availableDays:ResDoctorDayAvail[];
    
}
