import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fs-comic-stories',
  templateUrl: './comic-stories.component.html',
  styleUrls: ['./comic-stories.component.scss']
})
export class ComicStoriesComponent implements OnInit {
  comicStories:any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.parent?.data.subscribe(data => {
      this.comicStories = data['resolvedComicData'];
    });
  }

}
