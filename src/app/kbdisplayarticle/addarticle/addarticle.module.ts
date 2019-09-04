import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { AddarticleComponent } from './addarticle.component';
import { AddarticleRoutingModule } from './addarticle.routing';
@NgModule({
  declarations: [
    AddarticleComponent
  ],
  imports: [
    CommonModule,
    AddarticleRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddArticleModule {}
