import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles!: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(value => {
      this.articles = value;
    });
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe(value => {
      this.articles = this.articles.filter(value => value.id !== article.id);
    });
  }

}
