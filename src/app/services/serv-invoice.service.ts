import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResInvoice } from 'src/app/interfaces/res-invoice';
import { Observable, of } from 'rxjs';
import { PathService } from './path.service';
import { delay, exhaustMap, mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ServInvoiceService {
  constructor(private http: HttpClient, private servPath: PathService) {}

  //Get and Delete subscribe inside component
  //Post and Put subscribe inside service

  //get all Invoices
  getInvoicesAll(): Observable<ResInvoice[]> {
    return this.http.get<ResInvoice[]>(this.servPath.getPathInvoice());
  }

  //get all Invoices
  getInvoicesByDate(date: Date): Observable<ResInvoice[]> {
    return this.http.get<ResInvoice[]>(
      this.servPath.getPathInvoice() + '/date',
      {
        params: {
          date: date.toISOString(),
        },
      }
    );
  }

  //get Invoice by ID
  getInvoiceByID(code: number): Observable<ResInvoice> {
    return this.http.get<ResInvoice>(
      this.servPath.getPathInvoice() + '/' + code
    );
  }

  //Add a new Invoice
  addInvoice(newInvoice: ResInvoice): Observable<ResInvoice> {
    return of(delay(2000)).pipe(
      mergeMap(() => {
        return this.http
          .post<ResInvoice>(this.servPath.getPathInvoice(), newInvoice)
          .pipe(
            exhaustMap((res) => {
              return of(res);
            })
          );
      })
    );
  }

  //update an existing Invoice
  updateInvoice(updatedInvoice: ResInvoice) {
    return this.http.put(
      this.servPath.getPathInvoice() + '/' + updatedInvoice.code.toString(),
      updatedInvoice
    );
  }

  //Delete an existing Invoice with all his history and related entities
  deleteInvoice(code: number) {
    return this.http.delete(
      this.servPath.getPathInvoice() + '/' + code.toString()
    );
  }
}
