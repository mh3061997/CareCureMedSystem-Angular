import { EnumInventoryItemCategory } from "../enums/enum-inventory-item-category.enum";

export class DtoInventoryItemNew {
    constructor(
        private name: string,
        private category: EnumInventoryItemCategory,
        private sellingPrice: number,
    ) { }
}
