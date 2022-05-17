import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @Input()
  article !: Article;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  @Output()
  showAuthor : EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  delete(){
    this.deletedArticle.emit(this.article);
  }

  showAuthorName(){
    this.showAuthor.emit(this.article.author);
  }

}
