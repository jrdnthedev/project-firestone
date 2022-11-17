import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Md5} from "md5-typescript";

@Injectable({
  providedIn: 'root'
})

export class ApiInterceptorService implements HttpInterceptor{
  private _rand: string = Math.random().toString(36).slice(2);
  private _md5:any = Md5.init(this._rand + 'e4c8dc328e9f94dafea4fb4a49c0a514a28485b0'+'c1fa97ff8d3602cd25fb15eef032aa72');
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    
    console.log(`Added header interceptor to - ${request.url}`);
    const modRequest: HttpRequest<any> = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        "Accept": "*/*"
      },
      params: new HttpParams()
      .set('ts', this._rand)
      .set('apikey', 'c1fa97ff8d3602cd25fb15eef032aa72')
      .set('hash', this._md5)
    });

    return next.handle(modRequest);
  }
}
