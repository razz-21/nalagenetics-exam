import { Component, Input, OnInit } from '@angular/core';
import { NewsArticle } from '@services/models/news-article.interace';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() article!: NewsArticle;

  constructor() { }

  ngOnInit(): void {
  }

  goToPage(): void {
    window.open(this.article.url, '_blank');
  }

  onErrorArticleImage(event: Event): void {
    (event.target as HTMLImageElement).src = "/assets/images/article_default_image.png";
  }


}
