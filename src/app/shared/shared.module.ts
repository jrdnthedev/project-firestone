import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    CardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule    
  ],
  exports: [
    CardComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    SearchBarComponent
  ]
})
export class SharedModule { }
