import { ResPatient } from "./res-patient";

export interface ResMedImage {
    code:number;
    image:string;
    type:string;
    dateAdded:string;
    patient?:ResPatient;
}
