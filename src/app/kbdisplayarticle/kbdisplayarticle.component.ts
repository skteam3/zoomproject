import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { KBArticles } from '../kbarticle';

@Component({
  selector: 'app-kbdisplayarticle',
  templateUrl: './kbdisplayarticle.component.html',
  styleUrls: ['./kbdisplayarticle.component.css']
})
export class KbdisplayarticleComponent implements OnInit {
  Article_name:string;
  Category:string;
  Content:string;





  constructor(private fb: FormBuilder,private router:Router) {   }
  kb: FormGroup;


  ngOnInit() {

  }
  onReadMore(item:KBArticles){
    this.router.navigate(['/readmore',item.ArticleId]);
  }
}
