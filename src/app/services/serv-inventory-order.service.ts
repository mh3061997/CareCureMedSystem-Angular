import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DtoInventoryOrderNew } from '../dtos/dto-inventory-order-new';
import { EnumInventoryOrderType } from '../enums/enum-inventory-order-type.enum';
import { ResInventoryOrder } from '../interfaces/inventory/res-inventory-order';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServInventoryOrderService {


  constructor(private http: HttpClient, private servPath: PathService) { }

  path = this.servPath.getPathinventoryOrder();
  ordersSubject= new Subject();

  getOrders(pageNumber: number, pageSize: number, sortColumn: string, sortDirection: string, startDate: Date | null, endDate: Date | null, orderType: EnumInventoryOrderType | null) {

    let typeString = orderType?.toString(),
      startDateString = startDate?.toISOString(),
      endDateString = endDate?.toISOString();

      let httpParams:any = {
        
          pageNumber: pageNumber.toString(),
          pageSize: pageSize.toString(),
          sortColumn: sortColumn,
          sortDirection: sortDirection,

      };
      if(typeString)
      httpParams.type = typeString;
      if(startDateString)
      httpParams.startDate = startDateString;
      if(endDateString)
      httpParams.endDate = endDateString;
      
    return this.http.get<any>(this.path, {
      params: httpParams,
      observe: 'response'
    });
  }


  addOrder(newOrder: DtoInventoryOrderNew) {
    return this.http.post<ResInventoryOrder>(this.path, newOrder);
  }

  reverseOrder(Ordercode: number) {
    return this.http.delete(this.path + Ordercode);
  }


  emitOrdersUpdatedSubject() {
    this.ordersSubject.next();
  }

  getOrdersSubject() {
    return this.ordersSubject;
  }

}
