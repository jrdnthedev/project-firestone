import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersComponent } from './characters.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
    CharacterListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CharactersModule { }
