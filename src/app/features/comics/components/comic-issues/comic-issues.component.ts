import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fs-comic-issues',
  templateUrl: './comic-issues.component.html',
  styleUrls: ['./comic-issues.component.scss']
})
export class ComicIssuesComponent implements OnInit {
  comicIssue:any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.parent?.data.subscribe(data => {
      this.comicIssue = data['resolvedComicData']
    })
  }

}
