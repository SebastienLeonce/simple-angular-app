import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/Article';
import { Router  } from '@angular/router';

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

  constructor(private route: Router ) { }

  ngOnInit(): void { }

  delete(){
    this.deletedArticle.emit(this.article);
  }

  showAuthorName(){
    this.showAuthor.emit(this.article.author);
  }

  openDetails(){
    this.route.navigate(['/article', this.article.id]);
  }

}
