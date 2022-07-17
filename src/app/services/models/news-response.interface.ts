import { NewsArticle } from "./news-article.inteface";

export interface NewsResponse {
  articles: NewsArticle[],
  status: string;
  totalResults: number;
}
