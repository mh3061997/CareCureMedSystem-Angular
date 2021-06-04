import { ResDoctor } from "./res-doctor";
import { ResPatient } from "./res-patient";
import { ResRole } from "./res-role";

export interface ResUserDao {
    
    code:number;
    username: string;
    enabled:boolean;
    name:string;
    patient?: ResPatient;
    doctor?: ResDoctor;
    roles: ResRole[];

}
