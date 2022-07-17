import { Component, OnInit } from '@angular/core';
import { countries } from "./country.data";
import { categories} from "./category.data";
import { NewsParams } from "@services/models/news-params.interface";

/* Services */
import { NewsService } from "@services/news.service";
import { NewsArticle } from '@services/models/news-article.interace';

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

  page = 1;
  pageSize = 12;

  isLoading = true;


  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {

    const newsParams: NewsParams = {
      category: "technology",
      country: "ph",
      q: "",
      page: this.page,
      pageSize: this.pageSize

    }
    this.newsService.getNews(newsParams).subscribe((res) => {
      this.articles = res.articles;
      this.totalNewsArticles = res.totalResults;
      this.isLoading = false;
    })
  }

}
