import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DtoInventoryItemNew } from '../dtos/dto-inventory-item-new';
import { DtoLookupInventoryItem } from '../dtos/lookups/dto-lookup-inventory-item';
import { EnumInventoryItemCategory } from '../enums/enum-inventory-item-category.enum';
import { EnumInventoryOrderType } from '../enums/enum-inventory-order-type.enum';
import { ResInventoryItem } from '../interfaces/inventory/res-inventory-item';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServInventoryItemService {

  constructor(private http: HttpClient, private servPath: PathService) { }

  path = this.servPath.getPathinventoryItem();
  private itemsSubject = new Subject();

  emitItemsUpdatedSubject() {
    this.itemsSubject.next();
  }

  getItemsSubject() {
    return this.itemsSubject;
  }

  getItems(pageNumber: number, pageSize: number, sortColumn: string, sortDirection: string, category: EnumInventoryItemCategory | null) {

    let categoryString = category?.toString();

    let httpParams: any = {

      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString(),
      sortColumn: sortColumn,
      sortDirection: sortDirection,

    };
    if (categoryString)
      httpParams.category = categoryString;
    return this.http.get<any>(this.path, {
      params: httpParams,
      observe: 'response'
    });

  }

  getItemsLookupByCategory(category: EnumInventoryItemCategory) :Observable<DtoLookupInventoryItem[]>{



    let httpParams: any = {
      category: category.toString(),
    };


    return this.http.get<DtoLookupInventoryItem[]>(this.path+"lookup", {
      params: httpParams,
    });

  }
  updateInventoryItemSellingPrice(itemCode: number, updatedSellingPrice: number) {
    return this.http.put(this.servPath.getPathinventoryItem(), null, {
      params: {
        code: itemCode.toString(),
        updatedSellingPrice: updatedSellingPrice.toString()
      }
    });
  }

  addInventoryItem(newItem: DtoInventoryItemNew) {
    return this.http.post(this.servPath.getPathinventoryItem(), newItem);
  }

}
