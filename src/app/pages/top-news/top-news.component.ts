import { Component, OnDestroy, OnInit } from '@angular/core';
import { countries } from "./country.data";
import { categories} from "./category.data";
import { NewsParams } from "@services/models/news-params.interface";

/* Services */
import { NewsService } from "@services/news.service";
import { NewsArticle } from '@services/models/news-article.interace';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit, OnDestroy {

  articles: NewsArticle[] = [];
  booksMarkedArticles: NewsArticle[] = [];
  totalNewsArticles = 0;
  countryList = countries;
  categoryList = categories;

  selectedCountry = "ph";
  selectedCategory = "";
  searchKeywork = "";

  page = 1;
  pageSize = 12;

  isLoading = true;

  subscription!: Subscription;

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.getBookMarkArticles();
    this.getNews();
  }

  getNews(): void {
    const newsParams: NewsParams = {
      category: this.selectedCategory,
      country: this.selectedCountry,
      q: this.searchKeywork,
      page: this.page,
      pageSize: this.pageSize

    }
    this.subscription = this.newsService.getNews(newsParams).subscribe((res) => {
      this.articles = res.articles;
      this.totalNewsArticles = res.totalResults;
      this.isLoading = false;
    })
  }

  getBookMarkArticles(): void {
    this.newsService.bookMarksArticles$.subscribe((articles) => {
      this.booksMarkedArticles = articles;
    })
  }

  onBookMarkedArticle(article: NewsArticle): void {
    this.newsService.addBookmark(article);
  }

  onUnbookMarkedArticle(article: NewsArticle): void {
    this.newsService.removeBookmark(article);
  }

  onSelectPageNumber(pageNumber: number) {
    this.page = pageNumber;
    this.getNews();

    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
