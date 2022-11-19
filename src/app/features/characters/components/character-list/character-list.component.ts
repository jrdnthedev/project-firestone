import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'fs-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  pageTitle:string = '';
  character:any;
  subscribe!:Subscription;
  filteredCharacters:any;

  constructor(private _characterService: CharactersService) { }

  ngOnInit(): void {
    // this.getCharacters();
  }

  getCharacters(): void {
    this.subscribe =  this._characterService.getCharacters().subscribe(
      character => {
        this.character = character
        this.filteredCharacters = this.character.data.results
      }
    )
  }

  onValueChange(value:string): void {
    this.filteredCharacters = this.filterCharacters(value);
  }

  filterCharacters(value:string) {
    value.toLocaleLowerCase()
    return this.character.data.results.filter((c:any) => c.name.toLocaleLowerCase().includes(value))
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }
}
