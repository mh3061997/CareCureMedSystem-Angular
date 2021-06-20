import { EnumInventoryOrderType } from "../enums/enum-inventory-order-type.enum";
import { ResInventoryItem } from "../interfaces/inventory/res-inventory-item";

export class DtoInventoryOrderNew {
    constructor(
       private units: number,
       private itemPrice: number,
       private totalPrice: number,
       private  itemExpiryDate: string,
       private  orderDate: string,
       private supplierName: string,
       private  type: EnumInventoryOrderType,
       private  userMadeBy: string,
       private  item: ResInventoryItem,
    ){}
}
