import { NgModule } from '@angular/core';
import { ComicsComponent } from './comics.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';
import { ComicStoriesComponent } from './components/comic-stories/comic-stories.component';
import { ComicIssuesComponent } from './components/comic-issues/comic-issues.component';



@NgModule({
  declarations: [
    ComicsComponent,
    ComicListComponent,
    ComicDetailsComponent,
    ComicStoriesComponent,
    ComicIssuesComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ComicsModule { }
