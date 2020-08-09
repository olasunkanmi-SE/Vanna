import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import * as videos from '../../../assets/json/videos.json';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  /**
   * Intercept incoming requests and simulate server api calls with observables
   */

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method } = request;
    if (url.endsWith('/fake') || url.endsWith('/signup')) {
      return of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    } else {
      return next.handle(request);
    }

    /**
     * handle each route outcome
     * @return users or products
     */

    function handleRoute() {
      switch (true) {
        case url.endsWith('/videos') && method === 'GET':
          return getVideos();
        default:
          next.handle(request);
      }
    }

    /**
     * Get all products
     * @return products with status code 200
     */

    function getVideos() {
      return ok(videos);
    }

    /**
     * Return status 200 if httprequest was successful
     * @return 200 and response body
     */

    function ok(body) {
      return of(new HttpResponse({ status: 200, body }));
    }
  }
}
