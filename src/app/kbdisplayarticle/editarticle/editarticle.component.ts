import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleservicesService } from 'src/app/articleservices.service';
import { KBArticles } from 'src/app/kbarticle';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DdlCatogoryName } from 'src/app/kbcategory';





@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent implements OnInit {
  arr:DdlCatogoryName
  kb:FormGroup;
  name: string;
  id:number;
  displayArticle:KBArticles;
  catid:number;
  catname:string;
  

constructor(private _act: ActivatedRoute, private _data: ArticleservicesService,private fb:FormBuilder,private _router:Router) { }


ngOnInit() {
   this.id=this._act.snapshot.params["ArticleId"];
   this._data.getKbArticleById(this.id).subscribe((x:KBArticles[]) => {
    //  this.arr = x;
    //  console.log(this.arr);
   this.displayArticle = x[0];
   this.kb.patchValue({
    ArticleName:this.displayArticle.ArticleName,
    ArticleId: this.displayArticle.ArticleId,
    categoryId:this.displayArticle.CategoryId,
    CategoryName: this.displayArticle.CategoryName,
    previewcontent: this.displayArticle.PreviewContent,
    Content: this.displayArticle.Content
 
  
    
  });
  
   });
   this._act.params.subscribe(
    (x)=>{
      this.id=this.id;
      console.log(this.id);
    });
    this._data.getCategoryById(this.id).subscribe(
      (data:DdlCatogoryName[])=>{
        this.arr=data[0];

        this.catid=data[0].CategoryId;
        this.catname=data[0].CategoryName;
      });
      console.log(this.arr);



   this.kb= this.fb.group({
     ArticleName: new FormControl(null),
     ArticleId: new FormControl(null),
     CategoryName: new FormControl(null),
     CategoryId: new FormControl(null),
     Content: new FormControl(null),
     previewcontent: new FormControl(null)
     });
   
}

 onEditArticle(){
   this._data.editArticle(
     new KBArticles(
       this.kb.value.ArticleName,
       this.kb.value.ArticleId,
       this.kb.value.categoryId,
       this.kb.value.CategoryName,
       this.kb.value.Content,
       this.kb.value.previewcontent,
       this.kb.value.CreatedBy,
       this.kb.value.CreatedByName,
       this.kb.value.CreatedDate,
       this.kb.value.ModifiedBy,
       this.kb.value.ModifiedByName,
       this.kb.value.ModifiedDate,
       this.kb.value.DdlCatogoryName
     
     )
   )

   .subscribe(
     (x:any)=>{
       this._router.navigate['/kbarticles']
     }
   )
 }


}

  
