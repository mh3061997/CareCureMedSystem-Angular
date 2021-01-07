import { ResPatient } from "./res-patient";

export interface ResMedImage {
    code:number;
    image:string;
    type:string;
    dateAdded:string;
    dateMade:string;
    subType:string;
    organ:string;
    patient?:ResPatient;
}
