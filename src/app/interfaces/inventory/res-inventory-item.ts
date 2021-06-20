import { EnumInventoryItemCategory } from "src/app/enums/enum-inventory-item-category.enum";

export interface ResInventoryItem {
    code:number;
    name:string;
    availableUnits:number;
    category:EnumInventoryItemCategory;
    sellingPrice:number;
    expiryDates:Map<string,number>;
}
