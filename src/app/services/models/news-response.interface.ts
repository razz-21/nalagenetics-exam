import { NewsArticle } from "./news-article.interace";

export interface NewsResponse {
  articles: NewsArticle[],
  status: string;
  totalResults: number;
}
