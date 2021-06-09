import { EnumInventoryCategory } from "../../enums/enum-inventory-category.enum";

export interface ResInventoryItem {
    code:number;
    name:string;
    availableUnits:number;
    category:EnumInventoryCategory;
    sellingPrice:number;
    expiryDates:Map<string,number>;
}
