import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpcacheService {
  private _requests: any = {}

  constructor() { }

  put(url:string, response: HttpResponse<any>): void {
    this._requests[url] = response;
  }

  get(url: string): HttpResponse<any> | undefined {
    return this._requests[url];
  }

  invalidateUrl(url:string): void {
    this._requests[url] = undefined;
  }

  invalidateCache(url:string): void {
    this._requests[url] = { };
  }
}
