import { ResInvoice } from "./res-invoice";

export interface ResInvoiceItem {

    code:number;
    name:string;
    price:number;
    invoice?:ResInvoice;
}
