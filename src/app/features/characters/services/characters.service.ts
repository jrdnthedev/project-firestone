import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ICharacter } from '../interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private _url = '/v1/public/characters';

  constructor(private _http: HttpClient) { }

  getCharacters(): Observable<ICharacter> {

    return this._http.get<ICharacter>(this._url).pipe(
      tap(character => console.log('All',JSON.stringify(character))),
      catchError(this.handleError)
    )
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
