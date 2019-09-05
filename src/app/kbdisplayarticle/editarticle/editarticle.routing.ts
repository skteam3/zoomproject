import { Routes, RouterModule } from '@angular/router';

import { EditarticleComponent } from './editarticle.component';
import { MainLayoutComponent } from 'src/app/main-layout/main-layout.component';
import { NgModule } from '@angular/core';

const routeArr: Routes = [
  {path: 'edit' , component: MainLayoutComponent,
  children: [
  {path: '', component: EditarticleComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routeArr)],
  exports: [RouterModule]
})

export class EditarticleRoutingModule {}
