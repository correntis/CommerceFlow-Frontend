import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router: Router) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        console.log("intercepting request")
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log("catch error in interceptor")
                console.log("error: ", error)
                if (error.status === 401) {
                    this.router.navigate(['/login']);
                }
                return throwError(() => new Error(error.message || 'Unauthorized'));
            })
        )
    }
}