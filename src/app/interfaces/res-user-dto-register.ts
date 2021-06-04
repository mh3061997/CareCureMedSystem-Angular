import { ResDoctor } from "./res-doctor";
import { ResPatient } from "./res-patient";
import { ResRole } from "./res-role";

export interface ResUserDtoRegister {

    username: string;
    password: string;
    patient?: ResPatient;
    doctor?: ResDoctor;
    name?:string;
    roles: ResRole[];
}
