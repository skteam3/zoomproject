import { Routes, RouterModule } from '@angular/router';

import { AddarticleComponent } from './addarticle.component';
import { MainLayoutComponent } from 'src/app/main-layout/main-layout.component';
import { NgModule } from '@angular/core';

const routeArr: Routes = [
  {path: 'add' , component: MainLayoutComponent,
    children: [
  {path: '', component: AddarticleComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routeArr)],
  exports: [RouterModule]
})

export class AddarticleRoutingModule {}
