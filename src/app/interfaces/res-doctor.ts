import { ResAppointment } from "./res-appointment"

export interface ResDoctor {
    code:number;
    name:string;
    mobile:string;
    email:string;
    gender:string;
    age:number;
    speciality:string;
    appointments:ResAppointment[];

    
}
