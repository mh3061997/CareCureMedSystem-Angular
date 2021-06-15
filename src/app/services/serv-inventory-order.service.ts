import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoInventoryOrderNew } from '../dtos/dto-inventory-order-new';
import { ResInventoryOrder } from '../interfaces/inventory/res-inventory-order';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServInventoryOrderService {


  constructor(private http: HttpClient, private servPath: PathService) { }

  path = this.servPath.getPathinventoryOrder();

  getOrders(pageNumber: number, pageSize: number, sortColumn: string, sortDirection: string) {
    return this.http.get<any>(this.path, {
      params: {
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString(),
        sortColumn: sortColumn,
        sortDirection: sortDirection
      },
      observe:'response'
    });
  }

  addOrder(newOrder: DtoInventoryOrderNew) {
    return this.http.post<ResInventoryOrder>(this.path,newOrder);
  }

  reverseOrder(Ordercode:number){
    return this.http.delete(this.path+Ordercode);
  }


}
