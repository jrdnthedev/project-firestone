import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ComicsService } from 'src/app/features/comics/services/comics.service';

@Injectable({
  providedIn: 'root'
})
export class ComicResolverService {

  constructor(private _comicService: ComicsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = Number(route.paramMap.get('id'));
    return this._comicService.getComicById(id);
  }
}
