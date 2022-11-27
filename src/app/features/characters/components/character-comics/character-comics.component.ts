import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fs-character-comics',
  templateUrl: './character-comics.component.html',
  styleUrls: ['./character-comics.component.scss']
})
export class CharacterComicsComponent implements OnInit {
  comicDetails:any;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.parent?.data.subscribe(data => {
      this.comicDetails = data['resolvedCharacterData'];
    })
  }

}
