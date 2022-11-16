import { Component, OnInit } from '@angular/core';
import { ComicsService } from './services/comics.service';

@Component({
  selector: 'fs-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  comics: any;

  constructor(private _comicService: ComicsService) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics(): void {
    this._comicService.getComics().subscribe(
      comic => this.comics = comic
    )
  }
}
