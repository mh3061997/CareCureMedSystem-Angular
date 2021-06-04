import { ResAppointment } from "./res-appointment"
import { ResInvoiceItem } from "./res-invoice-item"
import { ResMembership } from "./res-membership"
import { ResPatient } from "./res-patient"

export interface ResInvoice {
code:number;
dateCreated:string;
dateFinalized:string;
totalDue:number;
totalAfterDiscount:number;
totalPaid:number;
totalRemaining:number;
discount:number;
status:string;
appointment?:ResAppointment;
usedMembership?:ResMembership;
paymentMethod:string;
invoiceItems:ResInvoiceItem[];
userFinalizedBy?:string;
patientMembershipSubscriber?:ResPatient;
}
 