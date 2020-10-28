import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const _reqWithHeaders = this.appendHeaders(req)
    return next.handle(_reqWithHeaders)
  }

  appendHeaders(request: HttpRequest<any>): HttpRequest<any> {

    return request.clone({
      params: request.params
        .set('format', 'json')
        .set('api_key', environment.api_key)
    });
  }
}
