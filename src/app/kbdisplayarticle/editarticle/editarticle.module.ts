import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditarticleRoutingModule } from './editarticle.routing';
import { EditarticleComponent } from './editarticle.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [
    EditarticleComponent
  ],
  imports: [
    CommonModule,
    EditarticleRoutingModule,
    ReactiveFormsModule,
    RichTextEditorAllModule,
  ]
})

export class EditarticleModule {}
