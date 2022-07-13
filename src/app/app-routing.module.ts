import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components */
import { TopNewsComponent } from '@pages/top-news/top-news.component';
import { BookmarksComponent } from '@pages/bookmarks/bookmarks.component';

const routes: Routes = [
  {
    path: "top-news",
    component: TopNewsComponent
  },
  {
    path: "bookmarks",
    component: BookmarksComponent
  },
  {
    path: "**",
    redirectTo: "/top-news"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
