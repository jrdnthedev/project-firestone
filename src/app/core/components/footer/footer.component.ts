import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  pageTitle: string = 'Marvel App';
  constructor() { }

  ngOnInit(): void {
  }

}
