import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fs-character-stories',
  templateUrl: './character-stories.component.html',
  styleUrls: ['./character-stories.component.scss']
})
export class CharacterStoriesComponent implements OnInit {
  storyDetails: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.parent?.data.subscribe(data => {
      this.storyDetails = data['resolvedData'];
    })
  }

}
