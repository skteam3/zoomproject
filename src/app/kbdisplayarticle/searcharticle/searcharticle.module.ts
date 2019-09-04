import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearcharticleComponent } from './searcharticle.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearcharticleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})

export class SearcharticleModule {}
