import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './article.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
