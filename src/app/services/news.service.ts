import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { NewsParams } from './models/news-params.interface';
import { NewsResponse } from './models/news-response.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

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

}
