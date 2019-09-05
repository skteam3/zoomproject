import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleservicesService {

  constructor(private _http:HttpClient) { }
  url = 'https://d0b3ad92.ngrok.io/api/KB/GetReadArticle?ArticleId' ;
  getArticleById(ArticleId){
    return this._http.get(this.url+ArticleId);
  }

}
