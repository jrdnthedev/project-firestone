import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterResolverService } from 'src/app/core/services/character-resolver.service';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'fs-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character:any;
  subscription!: Subscription;

  constructor(private _characterService: CharactersService,private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = Number(this._route.snapshot.paramMap.get('id'));
    // this.getCharacter(id);

    this.character = this._route.snapshot.data['resolvedCharacterData']
  }

  getCharacter(id:number): void {
    this.subscription = this._characterService.getCharacterById(id).subscribe(
      character => this.character = character
    )
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
