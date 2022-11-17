import { NgModule } from '@angular/core';
import { ComicsComponent } from './comics.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';



@NgModule({
  declarations: [
    ComicsComponent,
    ComicListComponent,
    ComicDetailsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ComicsModule { }
