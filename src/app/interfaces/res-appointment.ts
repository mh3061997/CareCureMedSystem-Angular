import { ResDoctor } from "./res-doctor"
import { ResPatient } from "./res-patient"

export interface ResAppointment {
    code:number;
    speciality:string;
    dateCreated:Date;
    dateToVisit:Date;
    status:string;
    notes:string;
    doctor:ResDoctor;
    patient:ResPatient;

}
