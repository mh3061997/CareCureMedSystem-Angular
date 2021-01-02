import { ResPackageBase } from "./res-package-base";
import { ResPatient } from "./res-patient"

export interface ResMembership {

    code:number;
    dateSubscriped:string;
    usedAmount:number;
    remainingAmount:number;
    patient:ResPatient;
    packageBase:ResPackageBase;
}