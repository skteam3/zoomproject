import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KbdisplayarticleComponent } from './kbdisplayarticle/kbdisplayarticle.component';
import { AddarticleComponent } from './kbdisplayarticle/addarticle/addarticle.component';
import { EditarticleComponent } from './kbdisplayarticle/editarticle/editarticle.component';
import { SearcharticleComponent } from './kbdisplayarticle/searcharticle/searcharticle.component';

@NgModule({
  declarations: [
    AppComponent,
    KbdisplayarticleComponent,
    AddarticleComponent,
    EditarticleComponent,
    SearcharticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
