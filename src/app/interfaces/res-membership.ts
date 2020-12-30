import { ResPatient } from "./res-patient"

export interface ResMembership {

    code:number;
    dateSubscriped:Date;
    usedAmount:number;
    remainingAmount:number;
    patient:ResPatient;
}