import { ResDoctor } from "./res-doctor"
import { ResPatient } from "./res-patient"

export interface ResAppointment {
    code:number;
    speciality:string;
    dateCreated:string;
    dateToVisit:string;
    status:string;
    notes:string;
    doctor:ResDoctor;
    patient:ResPatient;

}
