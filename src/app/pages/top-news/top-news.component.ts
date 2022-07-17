import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { countries } from "./country.data";
import { categories} from "./category.data";
import { NewsParams } from "@services/models/news-params.interface";

/* Services */
import { NewsService } from "@services/news.service";
import { NewsArticle } from '@services/models/news-article.inteface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit, OnDestroy {

  articles: NewsArticle[] = [];
  bookMarkedArticles: NewsArticle[] = [];
  totalNewsArticles = 0;
  countryList = countries;
  categoryList = categories;

  selectedCountry = "ph";
  selectedCategory = "";
  searchKeywork = "";

  page = 1;
  pageSize = 12;

  isLoading = true;

  newsArticleSubscription!: Subscription;
  bookmarkedArticleSubscription!: Subscription;

  constructor(
    private newsService: NewsService,
    private cdrf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getNews();
    this.getBookMarkArticles();
  }

  getNews(): void {
    const newsParams: NewsParams = {
      category: this.selectedCategory,
      country: this.selectedCountry,
      q: this.searchKeywork,
      page: this.page,
      pageSize: this.pageSize

    }
    this.newsArticleSubscription = this.newsService.getNews(newsParams).subscribe((res) => {
      this.articles = res.articles;
      this.totalNewsArticles = res.totalResults;
      this.isLoading = false;
    })
  }

  /**
   * Get the bookmarked articles from the news service
   */
  getBookMarkArticles(): void {
    this.bookmarkedArticleSubscription = this.newsService.bookMarksArticles$.subscribe((articles) => {
      this.bookMarkedArticles = articles;
    })
  }

  /**
   *
   * @param article needed for condition
   * @returns boolean if an article has the same title. Will marked as bookmarked article if the condition is met.
   */
  isBookmarked(article: NewsArticle): boolean {
    return this.bookMarkedArticles.map((article) => article.title).includes(article.title);
  }

  onBookMarkedArticle(article: NewsArticle): void {
    this.newsService.addBookmark(article);
  }

  onUnbookMarkedArticle(article: NewsArticle): void {
    this.newsService.removeBookmark(article);
  }

  resetPage(): void {
    this.page = 1;
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
    this.newsArticleSubscription.unsubscribe();
    this.bookmarkedArticleSubscription.unsubscribe();
  }

}
