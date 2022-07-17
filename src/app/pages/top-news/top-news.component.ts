import { Component, OnInit } from '@angular/core';
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
export class TopNewsComponent implements OnInit {

  articles: NewsArticle[] = [];
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


  onSelectPageNumber(pageNumber: number) {
    this.page = pageNumber;
    this.getNews();

    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

}
