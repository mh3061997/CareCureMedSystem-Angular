import { EnumInventoryCategory } from "../enums/enum-inventory-category.enum";
import { ResInventoryItem } from "../interfaces/inventory/res-inventory-item";

export class DtoInventoryOrderNew {
    constructor(
       private units: number,
       private itemPrice: number,
       private totalPrice: number,
       private  itemExpiryDate: string,
       private  orderDate: string,
       private supplierName: string,
       private  type: EnumInventoryCategory,
       private  userMadeBy: string,
       private  item: ResInventoryItem,
    ){}
}
