// import {ConnectionBackend, RequestOptions, Request, HttpRequest, Response, Http, Headers} from '@angular/http';
import {
  HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Base, Cache } from '@onehealth/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { RequestOptions } from './request-options';
import { md5 } from '@onehealth/core';
import 'rxjs/add/operator/catch';
import { EnvironmentService } from './environment.service';

@Injectable({ providedIn: 'root' })
export class InterceptedHttp implements HttpInterceptor {
  public static SKIP_AUTHOR = 'Skip-Authorization';

  constructor(public auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(req.url)) {
      req = req.clone({ url: EnvironmentService.env.restApiUrl + req.url });
    }
    return this.sendRequest(req, next);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isNoToken(req)) {
      if (!req.headers.has(InterceptedHttp.SKIP_AUTHOR)) {
        let accessToken = this.auth.getToken();
        if (accessToken) {
          req = req.clone({
            setHeaders: {
              'Content-Type': 'application/json; charset=utf-8',
              Authorization: 'Bearer ' + accessToken,
            },
          });
        }
      }
    }
    return next
      .handle(req)
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            if (this.isCacheEnabled(req)) {
              this.putCache(req, event);
            }
          }
        })
      )
      .catch((error) => {
        Base.hideLoading();
        if (error.status || (error.error && error.error?.code)) {
          if (error.status === 401 || error.error?.code === 401) {
            Base.showNotification(
              'Bạn chưa đăng nhập, vui lòng đăng nhập',
              Base.NOTI_ERROR,
              'Lỗi đăng nhập'
            );
            this.auth.logout();
            return Observable.throw(error);
          } else if (error.status === 403 || error.error?.code === 403) {
            Base.showNotification(
              'Bạn không có quyền truy cập vào chức năng này',
              Base.NOTI_ERROR,
              'Lỗi truy nhập'
            );
            this.auth.backtoDashboard();
            return Observable.throw(error);
          } else if (error.status === 463 || error.error?.code === 463) {
            Base.showNotification(
              'Token đã hết hạn',
              Base.NOTI_ERROR,
              'Lỗi truy nhập'
            );
            this.auth.logout();
            return Observable.throw(error);
          } else {
            if (error.error && error.error?.code) {
              Base.showNotification(
                'Lỗi: ' + error.error?.code + ': ' + error.error.message + '',
                Base.NOTI_ERROR,
                'Lỗi kết nối'
              );
            } else {
              if (error.status && !this.isErrorPassing(req)) {
                this.auth.errorPage(
                  error.status,
                  req.url + ' Response: ' + error.message
                );
              }
            }
            return Observable.throw(error);
          }
        } else {
          if (!this.isErrorPassing(req)) {
            if (error.message)
              this.auth.errorPage(0, req.url + ' Response: ' + error.message);
            else this.auth.errorPage(0, 'Lỗi không xác định');
          }
          return Observable.throw(error);
        }
      });
  }

  private isCacheEnabled(req: HttpRequest<any>) {
    return req.params instanceof RequestOptions && req.params.cache;
  }

  private isErrorPassing(req: HttpRequest<any>) {
    return req.params instanceof RequestOptions && req.params.errorPassing;
  }

  private isNoToken(req: HttpRequest<any>) {
    return req.params instanceof RequestOptions && req.params.noToken;
  }

  private generateCacheKey(url: HttpRequest<any>): string {
    let str = [];
    str.push(url.urlWithParams);
    if (!!url.body) {
      str.push(JSON.stringify(url.body));
    }
    return md5(str.join(':'));
  }

  getCache(req: HttpRequest<any>): HttpResponse<any> | undefined {
    let cacheData = Cache.getCache(this.generateCacheKey(req));
    if (cacheData) {
      let cachedResponse = new HttpResponse<any>();
      Object.assign(cachedResponse, JSON.parse(cacheData));
      return cachedResponse;
    }
    return undefined;
  }

  putCache(req: HttpRequest<any>, response: HttpResponse<any>): void {
    let cacheTtl: number = 10 * 60 * 1000;
    if (req.params instanceof RequestOptions && req.params.ttl > 0) {
      cacheTtl = req.params.ttl;
    }
    Cache.addCache(
      this.generateCacheKey(req),
      JSON.stringify(response),
      Cache.STORAGE,
      new Date().getTime() + cacheTtl
    );
  }
}
