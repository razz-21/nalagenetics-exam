import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TopNewsComponent } from '@pages/top-news/top-news.component';
import { BookmarksComponent } from '@pages/bookmarks/bookmarks.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    TopNewsComponent,
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
})
export class PagesModule { }
