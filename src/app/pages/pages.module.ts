import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { TopNewsComponent } from '@pages/top-news/top-news.component';
import { BookmarksComponent } from '@pages/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    TopNewsComponent,
    BookmarksComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class PagesModule { }
