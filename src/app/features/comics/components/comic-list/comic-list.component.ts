import { Component, OnInit } from '@angular/core';

import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'fs-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {
  comics: any;
  pageTitle: string = 'Comic List';
  
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
