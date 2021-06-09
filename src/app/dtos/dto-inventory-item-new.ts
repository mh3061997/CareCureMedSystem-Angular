import { EnumInventoryCategory } from "../enums/enum-inventory-category.enum";

export class DtoInventoryItemNew {
    constructor(
        private name: string,
        private category: EnumInventoryCategory,
        private sellingPrice: number,
    ) { }
}
