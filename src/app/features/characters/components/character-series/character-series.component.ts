import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fs-character-series',
  templateUrl: './character-series.component.html',
  styleUrls: ['./character-series.component.scss']
})
export class CharacterSeriesComponent implements OnInit {
  seriesDetails: any;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.parent?.data.subscribe(data => {
      this.seriesDetails = data['resolvedCharacterData'];
    })
  }

}
