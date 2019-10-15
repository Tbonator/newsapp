import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  api_key = '6a4fb27bd3f24a1ba68a80c8b6d7a428';


constructor(private http: HttpClient) { }

initSource() {
  return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
}
 initArticles() {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
 }
 getArticlesByID(source: String ) {
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=' + this.api_key);
 }

}
