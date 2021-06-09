import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoInventoryItemNew } from '../dtos/dto-inventory-item-new';
import { ResInventoryItem } from '../interfaces/inventory/res-inventory-item';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServInventoryItemService {

  constructor(private http: HttpClient, private servPath: PathService) { }

  getInventoryItemsAll(): Observable<ResInventoryItem[]> {
    return this.http.get<ResInventoryItem[]>(this.servPath.getPathinventoryItem());
  }

  updateInventoryItemSellingPrice(itemCode: number, updatedSellingPrice: number) {
    return this.http.put(this.servPath.getPathinventoryItem(), null, {
      params: {
        code: itemCode.toString(),
        updatedSellingPrice: updatedSellingPrice.toString()
      }
    });
  }

  addInventoryItem(newItem:DtoInventoryItemNew){
    return this.http.post(this.servPath.getPathinventoryItem(),newItem);
  }

}
