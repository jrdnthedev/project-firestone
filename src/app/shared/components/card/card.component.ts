import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
