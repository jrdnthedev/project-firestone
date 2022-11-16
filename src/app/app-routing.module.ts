import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CharactersComponent } from './features/characters/characters.component';
import { ComicsComponent } from './features/comics/comics.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path:'comics', title:'Welcome to the Marvel App', component: ComicsComponent },
  { path:'characters', title:'Welcome to the Marvel App', component: CharactersComponent },
  { path:'home', title:'Welcome to the Marvel App', component: HomeComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path:'**', title:'404 Page Not Found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
