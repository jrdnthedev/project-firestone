import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fs-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  private _listFilter: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    //passing input value to parent component
    this.valueChange.emit(value);
  }
}
