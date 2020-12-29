import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  isLoading = false;
  loadersCount = 0;

  constructor(private loadingController: LoadingController) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadersCount++;
    if (!this.isLoading) {
      this.presentLoader();
    }
    const reqCopy = req.clone({
      url: `${environment.endpoint}${req.url}`,
    });
    return next.handle(reqCopy).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error as HttpErrorResponse);
      }),
      finalize(() => {
        this.loadersCount--;
        setTimeout(() => {
          if (!this.loadersCount) {
            this.dismissLoader();
          }
        }, 100);
      })
    );
  }

  async presentLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
}
