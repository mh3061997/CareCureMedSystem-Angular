import { EnumInventoryCategory } from "../../enums/enum-inventory-category.enum";
import { ResInventoryItem } from "./res-inventory-item";

export interface ResInventoryOrder {

    code: number,
    units: number,
    itemPrice: number,
    totalPrice: number,
    itemExpiryDate: string,
    orderDate: string,
    supplierName: string,
    type: EnumInventoryCategory,
    userMadeBy: string,
    item: ResInventoryItem,
    cancelled: boolean
}

