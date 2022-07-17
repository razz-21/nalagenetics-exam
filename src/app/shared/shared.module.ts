import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NewsCardComponent } from '@components/news-card/news-card.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    NewsCardComponent,
    NavBarComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    NewsCardComponent,
    NavBarComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
