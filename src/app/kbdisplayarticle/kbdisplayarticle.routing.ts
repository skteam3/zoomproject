import { Routes, RouterModule } from '@angular/router';

import { KbdisplayarticleComponent } from './kbdisplayarticle.component';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { ReadmoreComponent } from '../readmore/readmore.component';

const routeArr: Routes = [
  {path: 'disp' , component: MainLayoutComponent,
  children: [
  {path: '', component: KbdisplayarticleComponent},
  {path: 'readmore/:ArticleId',component:ReadmoreComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routeArr)],
  exports: [RouterModule]
})

export class KbDisplayarticleRoutingModule {}
