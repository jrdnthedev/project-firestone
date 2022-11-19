import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  pageTitle:string = 'characters component';
  
  constructor() { }

  ngOnInit(): void {
  }

}
