import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AddarticleComponent } from './addarticle.component';
import { AddarticleRoutingModule } from './addarticle.routing';
@NgModule({
  declarations: [
    AddarticleComponent
  ],
  imports: [
    CommonModule,
    AddarticleRoutingModule,
    ReactiveFormsModule,
    RichTextEditorAllModule
  ]
})
export class AddArticleModule {}
