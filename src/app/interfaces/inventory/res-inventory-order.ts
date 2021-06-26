import { EnumInventoryOrderType } from "src/app/enums/enum-inventory-order-type.enum";
import { ResInventoryItem } from "./res-inventory-item";

export interface ResInventoryOrder {

    code: number,
    units: number,
    itemPrice: number,
    totalPrice: number,
    itemExpiryDate: string,
    orderDate: string,
    supplierName: string,
    type: EnumInventoryOrderType,
    userMadeBy: string,
    item: ResInventoryItem,
    cancelled: boolean,
    note:string
}

