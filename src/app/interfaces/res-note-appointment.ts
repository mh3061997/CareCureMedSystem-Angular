import { ResAppointment } from "./res-appointment";

export interface ResNoteAppointment {

    code:number;
    note:string;
    appointment?:ResAppointment;
}
