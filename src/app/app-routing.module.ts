import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CharacterResolverService } from './core/services/character-resolver.service';
import { ComicResolverService } from './core/services/comic-resovler/comic-resolver.service';
import { CharactersComponent } from './features/characters/characters.component';
import { CharacterComicsComponent } from './features/characters/components/character-comics/character-comics.component';
import { CharacterDetailsComponent } from './features/characters/components/character-details/character-details.component';
import { CharacterSeriesComponent } from './features/characters/components/character-series/character-series.component';
import { CharacterStoriesComponent } from './features/characters/components/character-stories/character-stories.component';
import { ComicsComponent } from './features/comics/comics.component';
import { ComicDetailsComponent } from './features/comics/components/comic-details/comic-details.component';
import { ComicIssuesComponent } from './features/comics/components/comic-issues/comic-issues.component';
import { ComicStoriesComponent } from './features/comics/components/comic-stories/comic-stories.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path:'comics', title:'Comic Page', component: ComicsComponent },
  { 
    path:'comics/:id', 
    title:'Comic Detail Page', 
    component: ComicDetailsComponent,
    resolve: {resolvedComicData: ComicResolverService},
    children:[
      {
        path: '',
        redirectTo: 'issues',
        pathMatch: 'full'
      },
      {
        path:'stories', title:'Comic Detail Page', 
        component: ComicStoriesComponent
      },
      {
        path:'issues', title:'Comic Detail Page', 
        component: ComicIssuesComponent
      }
    ] 
  },
  { path:'characters', title:'Character Page', component: CharactersComponent },
  { 
    path:'characters/:id', title:'Character Detail Page', 
    component: CharacterDetailsComponent,
    resolve: {resolvedCharacterData: CharacterResolverService},
    children:[
      {
        path: '',
        redirectTo: 'comics',
        pathMatch: 'full'
      },
      {
        path:'series', title:'Character Detail Page', 
        component: CharacterSeriesComponent
      },
      {
        path:'comics', title:'Character Detail Page', 
        component: CharacterComicsComponent
      },
      {
        path:'stories', title:'Character Detail Page', 
        component: CharacterStoriesComponent
      }
    ] 
  },
  { path:'home', title:'Welcome to the Marvel App', component: HomeComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path:'**', title:'404 Page Not Found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
