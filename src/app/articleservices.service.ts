import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleservicesService {
  url:string="https://66260940.ngrok.io/api/KB/GetKBArticlesById?ArticleId={ArticleId}";
  url1:string="https://66260940.ngrok.io/api/KB/InsertUpdateKBAricles";
  url2:string="https://66260940.ngrok.io/api/KB/GetCategories";
  constructor(private _http:HttpClient) { }

  getKbArticleById(ArticleId)
  {
    return this._http.get(this.url+ ArticleId);
  }

  editArticle(newArticle) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newArticle);
    return this._http.put(this.url1 + newArticle.ArticleId, body, {
      headers: head
    });


}

getCategoryById(CategoryId)
  {
    return this._http.get(this.url2+CategoryId);
  }
}