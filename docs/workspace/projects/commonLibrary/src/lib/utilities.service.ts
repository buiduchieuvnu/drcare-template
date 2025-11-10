import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterceptedHttp } from './http.interceptor';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from './auth.service';
import { EnvironmentService } from './environment.service';

const TOKEN_HIS = 'token-his';
const TOKEN_ONEHEALTH = 'token-onehealth';
const TOKEN_EMR = 'token-emr';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  //các API dreport

  public async viewDoc(data: any) {
    const tokenOnehealth = this.localStorageService.retrieve(TOKEN_ONEHEALTH);
    if (!tokenOnehealth) {
      AuthService.backtoLogin();
    }
    return await this.http
      .post(
        EnvironmentService.env.dreportApiUrl + 'api/dreport/report/render',
        data,
        {
          headers: {
            [InterceptedHttp.SKIP_AUTHOR]: 'true', // thêm lệnh này vào nếu không API sẽ tự gán token mặc định
            // Authorization: "Bearer " + tokenOnehealth,
            Authorization:
              'Bearer ' +
              'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFSEVBTFRIIiwianRpIjoiMTQxIiwidHlwZSI6IkFDQ0VTU19UT0tFTiIsIlZBSV9UUk8iOiJEVVlFVF9URU1QTEFURSxBRE1JTl9PTkVIRUFMVEgiLCJQUk9EVUNUX0lEIjowLCJET05WSV9JRCI6IjMiLCJNQV9ET05WSSI6IjIiLCJpc3MiOiJodHRwOi8vT05IRUFMVEguVk5DQVJFLlZOIiwiaWF0IjoxNzMwOTQ5NzY1LCJleHAiOjM1MzA5NDk3NjV9.QCfI2fTDNr13mJT8I6oFMcbgLcV_5QOPEeQrhS9VDP7Hpsz4iUUo5nGQFBjUss2LcveHKMqX9usZL4jRyP54Ew',
          },
        }
      )
      .toPromise();
  }

  // các API rest

  async restService(params: any) {
    const tokenHis = this.localStorageService.retrieve(TOKEN_HIS);
    if (!tokenHis) {
      AuthService.backtoLogin();
    }
    return await this.http
      .post(
        'vnpthis/api/v3/RestService',
        {
          func: 'dbCALL_SP_R',
          params: params,
          uuid: tokenHis,
        },
        {
          headers: {
            [InterceptedHttp.SKIP_AUTHOR]: 'true',
            Authorization: 'Bearer ' + tokenHis,
          },
        }
      )
      .toPromise();
  }
}
