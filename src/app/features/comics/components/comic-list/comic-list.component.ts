import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'fs-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {
  comics: any;
  pageTitle: string = 'Comic List';
  private _filteredListItem: string = '';
  filteredComics:any;
  subscription!: Subscription;

  constructor(private _comicService: ComicsService) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics(): void {
    this.subscription = this._comicService.getComics().subscribe(
      comic =>{ 
        this.comics = comic
        this.filteredComics = this.comics.data.results;
      }
    )
  }

  get listFilter(): string{
    return this._filteredListItem;
  }

  set listFilter(item: string) {
    this._filteredListItem = item;
    this.filteredComics = this.filterList(item);
  }

  filterList(filterBy: string){
    filterBy.toLocaleLowerCase();
    return this.comics.data.results.filter((comic:any) => comic.title.toLocaleLowerCase().includes(filterBy))
  }

  ngOnDestroy(): void {
    //unsubscribe when finished!
    this.subscription.unsubscribe();
  }
}
