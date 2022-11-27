import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComicsService } from '../../services/comics.service';

@Component({
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss']
})
export class ComicDetailsComponent implements OnInit {
  comic:any;
  subscription!: Subscription;

  constructor(private _comicService: ComicsService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = Number(this._route.snapshot.paramMap.get('id'));
    // this.getComic(id);
    this.comic = this._route.snapshot.data['resolvedComicData']
  }

  getComic(id: number): void {
    this.subscription = this._comicService.getComicById(id).subscribe(
      comic => this.comic = comic
    )
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
