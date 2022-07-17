import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { NewsParams } from './models/news-params.interface';
import { NewsResponse } from './models/news-response.interface';
import { NewsArticle } from './models/news-article.interace';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  bookMarksArticles: NewsArticle[] = [];
  bookMarksArticles$ = new BehaviorSubject<NewsArticle[]>(this.bookMarksArticles);

  constructor(
    private http: HttpClient
  ) {
    this.bookMarksArticles$.subscribe((articles) => {
      this.bookMarksArticles = articles;
    })
  }

  getNews(params: (NewsParams | {}) = {}): Observable<NewsResponse> {
    let httpParams = new HttpParams();

    /** Loop the object params and append the params that has value */
    Object.entries(params).forEach((param) => {
      const [key, value] = param;
      if (value || value !== "") {
        httpParams = httpParams.append(key, value);
      }
    })


    return this.http.get<NewsResponse>(
      `${environment.API_NEWS_BASE_URL}/top-headlines?apiKey=${environment.API_NEWS_KEY}`, { params: httpParams });
  }

  addBookmark(article: NewsArticle): void {
    this.bookMarksArticles.push(article);
    this.bookMarksArticles$.next(this.bookMarksArticles);
  }

  removeBookmark(article: NewsArticle): void {
    const newBookmarkedArticle = this.bookMarksArticles.filter((bookMarkedArticle) => JSON.stringify(bookMarkedArticle) !== JSON.stringify(article));
    this.bookMarksArticles$.next(newBookmarkedArticle);
  }

}
