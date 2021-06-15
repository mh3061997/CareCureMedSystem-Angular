import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServHttpUtilsService {

  constructor() { }

  getCountFromHttpResponse(response:HttpResponse<any>):number {
    let httpHeaderCount = response.headers.get("X-Total-Count");
    let returnedCount = httpHeaderCount ? parseInt(httpHeaderCount) : 0;
    return returnedCount;
  }

  getBodyFromHttpResponse(response:HttpResponse<any>){
    return response!.body!;
  }
}
