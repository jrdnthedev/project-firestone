import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CharactersComponent } from './features/characters/characters.component';
import { CharacterDetailsComponent } from './features/characters/components/character-details/character-details.component';
import { ComicsComponent } from './features/comics/comics.component';
import { ComicDetailsComponent } from './features/comics/components/comic-details/comic-details.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path:'comics', title:'Comic Page', component: ComicsComponent },
  { path:'comics/:id', title:'Comic Detail Page', component: ComicDetailsComponent },
  { path:'characters', title:'Character Page', component: CharactersComponent },
  { path:'characters/:id', title:'Character Detail Page', component: CharacterDetailsComponent },
  { path:'home', title:'Welcome to the Marvel App', component: HomeComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path:'**', title:'404 Page Not Found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
