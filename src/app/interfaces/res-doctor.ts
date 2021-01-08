import { ResAppointment } from "./res-appointment"

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

    
}
