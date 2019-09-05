import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KbdisplayarticleComponent } from './kbdisplayarticle.component';
import { KbDisplayarticleRoutingModule } from './kbdisplayarticle.routing';
import { SearcharticleComponent } from './searcharticle/searcharticle.component';

@NgModule({
  declarations: [
    KbdisplayarticleComponent,
    SearcharticleComponent
  ],
  imports: [
    CommonModule,
    KbDisplayarticleRoutingModule
  ]
})

export class KbdisplayarticleModule {}
