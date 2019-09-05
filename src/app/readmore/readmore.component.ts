import { Component, OnInit } from '@angular/core';
import { KBArticles } from '../kbarticle';
import { ActivatedRoute } from '@angular/router';
import { ArticleservicesService } from '../articleservices.service';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {

  constructor(private _actroute:ActivatedRoute, private _data:ArticleservicesService) { }
  arr:KBArticles[]=[];
  id:number;
  name:string='';
  content:string='';
  pcontent:string='';
  catid:number;
  catname:string='';
  createdby:number;
  createdbyname:string='';
  createddate:string='';
  modifiedby:number;
  modifieddate:string='';
  ddlcatname:string='';

  ngOnInit() {
    this._actroute.params.subscribe(

      (x)=>{
        this.id=this.id;
        console.log(this.id);
      }
    );
    // this._data.getArticleById(this.id).subscribe(

    //   (data:KBArticles[])=>{
    //     this.arr=data;

        // this.name=data[0].ArticleName;
        // this.content=data[0].Content;
        // this.pcontent=data[0].PreviewContent;
        // this.catid=data[0].CategoryId;
        // this.catname=data[0].CategoryName;
        // this.createdby=data[0].CreatedBy;
        // this.createdbyname=data[0].CreatedByName;
        // this.createddate=data[0].CreatedDate;
        // this.modifiedby=data[0].ModifiedBy;
        // this.modifieddate=data[0].ModifiedDate;
        // this.ddlcatname=data[0].DdlCatogoryName;
  //     }
  //   );
  //   console.log(this.arr);
  // }
}
}
