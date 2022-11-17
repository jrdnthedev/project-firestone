import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IComics } from '../interface/comics';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private _url = '/v1/public/comics';

  constructor(private _http: HttpClient) { }

  getComics(): Observable<IComics[]> {
    return this._http.get<IComics[]>(this._url).pipe(
      tap(data => console.log('all', data)),
      catchError(this.handleError)
    );
  }

  getComicById(id: number): Observable<IComics[]> {
    return this._http.get<IComics[]>(this._url+'/'+id).pipe(
      tap(data => console.log('all', data)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occoured ${err.error.message}`
    } else {
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
