import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kbdisplayarticle',
  templateUrl: './kbdisplayarticle.component.html',
  styleUrls: ['./kbdisplayarticle.component.css']
})
export class KbdisplayarticleComponent implements OnInit {
  Article_name:string;
  Category:string;
  Content:string;
  
  


  constructor(private fb: FormBuilder) { }
  kb: FormGroup;


  ngOnInit() {

  }

}
