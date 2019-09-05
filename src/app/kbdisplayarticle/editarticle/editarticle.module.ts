import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditarticleRoutingModule } from './editarticle.routing';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { HttpClientModule } from '@angular/common/http';
import { EditarticleComponent } from './editarticle.component';

@NgModule({
  declarations: [
    EditarticleComponent
   
  ],
  imports: [
    CommonModule,
    EditarticleRoutingModule,
    ReactiveFormsModule,
    RichTextEditorAllModule,
    HttpClientModule
  ]
})

export class EditarticleModule {}
