import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KbdisplayarticleComponent } from './kbdisplayarticle.component';
import { KbDisplayarticleRoutingModule } from './kbdisplayarticle.routing';

@NgModule({
  declarations: [
    KbdisplayarticleComponent
  ],
  imports: [
    CommonModule,
    KbDisplayarticleRoutingModule
  ]
})

export class KbdisplayarticleModule {}
