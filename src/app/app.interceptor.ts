import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbmFsQGdtYWlsLmNvbSIsImlkIjoiNjVkYjFlNTQ1ODE4ZGFhYmMyMGU2NTFlIiwiaWF0IjoxNzA4ODU5MDk3fQ.2aqDE4ar18-p8-iwF9cj6h040mwrTliYiTVKHd5ymrc";
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone(
      {
          headers: request.headers.set('Authorization', `Bearer ${this.TOKEN}`)
      });

  return next.handle(request)

  }
}
