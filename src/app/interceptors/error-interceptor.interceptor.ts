import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                // retry(1),
            //     tap((httpEvent:HttpEvent<HttpResponse<any>>)=>{
            //    console.log(httpEvent);
               
                
            //     }),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    }
                    console.log(errorMessage);
                    // console.log(error);
                    
                    
                    if (error.url?.toString().endsWith('login')) {
                        return next.handle(request);
                    }
                    //  else if ( request.headers.get("isExpired")) {
                    
                    // this.router.navigate(['login'],{fragment:"sessionExpired"});
                    // return throwError(errorMessage);

                    // }
                    else {

                        return throwError(errorMessage);
                    }


                })
            )
    }

}