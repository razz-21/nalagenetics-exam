import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsArticle } from '@services/models/news-article.inteface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() article!: NewsArticle;
  @Input() isBookMarked = true;
  @Output() bookmarkedArticle: EventEmitter<NewsArticle> = new EventEmitter<NewsArticle>();
  @Output() unbookmartkedArticle: EventEmitter<NewsArticle> = new EventEmitter<NewsArticle>();

  constructor() { }

  ngOnInit(): void {}

  bookMarkArticle(): void {
    this.isBookMarked ? this.unbookmartkedArticle.emit(this.article) : this.bookmarkedArticle.emit(this.article);
  }

  goToPage(): void {
    window.open(this.article.url, '_blank');
  }

  onErrorArticleImage(event: Event): void {
    (event.target as HTMLImageElement).src = "/assets/images/article_default_image.png";
  }


}
