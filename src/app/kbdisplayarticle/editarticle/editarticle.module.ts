import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditarticleRoutingModule } from './editarticle.routing';
import { EditarticleComponent } from './editarticle.component';

@NgModule({
  declarations: [
    EditarticleComponent
  ],
  imports: [
    CommonModule,
    EditarticleRoutingModule,
    ReactiveFormsModule
  ]
})

export class EditarticleModule {}
