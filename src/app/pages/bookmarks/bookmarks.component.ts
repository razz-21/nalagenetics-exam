import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '@services/models/news-article.interace';
import { NewsService } from '@services/news.service';

/* Services */

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarkedArticles: NewsArticle[] = [];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.bookMarksArticles$.subscribe((articles) => {
      this.bookmarkedArticles = articles;
    })
  }

  isBookmarked(article: NewsArticle): boolean {
    return this.bookmarkedArticles.map((article) => article.title).includes(article.title);
  }

  onBookMarkedArticle(article: NewsArticle): void {
    this.newsService.addBookmark(article);
  }

  onUnbookMarkedArticle(article: NewsArticle): void {
    this.newsService.removeBookmark(article);
  }

}
