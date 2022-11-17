import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule    
  ],
  exports: [
    CardComponent,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
