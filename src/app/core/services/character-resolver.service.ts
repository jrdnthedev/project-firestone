import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersService } from 'src/app/features/characters/services/characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolverService {

  constructor(private _characterService: CharactersService) { 
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = Number(route.paramMap.get('id'));
    return this._characterService.getCharacterById(id);
  }
}

