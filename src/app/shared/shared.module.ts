import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NewsCardComponent } from '@components/news-card/news-card.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NewsCardComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    NewsCardComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
