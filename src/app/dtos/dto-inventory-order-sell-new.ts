import { EnumInventoryOrderType } from "../enums/enum-inventory-order-type.enum";
import { ResInventoryItem } from "../interfaces/inventory/res-inventory-item";

export class DtoInventoryOrderSupplyNew {
    constructor(
       private units: number,
       private itemPrice: number,
       private totalPrice: number,
       private  orderDate: string,
       private  type: EnumInventoryOrderType,
       private  userMadeBy: string,
       private  item: ResInventoryItem,
    ){}
}
