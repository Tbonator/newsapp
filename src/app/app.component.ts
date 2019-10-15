import { Component, OnInit } from '@angular/core';
import {NewsApiServiceService} from './NewsApiService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  mArticles: Array<any>;
  mSources: Array<any>;

constructor( private newsapi: NewsApiServiceService ) {
  console.log('app constructor called');
}

ngOnInit() {
  //load Articles
  this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
  //load news Sources 
  
  this.newsapi.initArticles().subscribe(data => this.mSources = data['sources']);
 }
  
 searchArticle( source) {
  console.log('selected source is :' + source);
  this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }  

}
