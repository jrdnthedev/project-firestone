import { Component, OnInit } from '@angular/core';
import { ComicsService } from './services/comics.service';

@Component({
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  pageTitle: string = 'Comic Page';

  constructor() { }

  ngOnInit(): void {
    
  }

}
