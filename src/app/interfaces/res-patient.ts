import { ResAppointment } from "./res-appointment";
import { ResMedImage } from "./res-med-image";
import { ResMembership } from "./res-membership"

export interface ResPatient {
    code:number;
    name:string;
    gender:string;
    email:string;
    mobile:string;
    age:number;
    totalDebt:number;
    notes:string,
    memberships:ResMembership[];
    appointments:ResAppointment[];
    medImages:ResMedImage[];
 
}