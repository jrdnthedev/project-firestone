import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersComponent } from './characters.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComicsComponent } from './components/character-comics/character-comics.component';
import { CharacterSeriesComponent } from './components/character-series/character-series.component';
import { CharacterStoriesComponent } from './components/character-stories/character-stories.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterComicsComponent,
    CharacterSeriesComponent,
    CharacterStoriesComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CharactersModule { }
