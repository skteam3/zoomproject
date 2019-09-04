import { Routes, RouterModule } from '@angular/router';

import { KbdisplayarticleComponent } from './kbdisplayarticle/kbdisplayarticle.component';
import { AddarticleComponent } from './kbdisplayarticle/addarticle/addarticle.component';
import { EditarticleComponent } from './kbdisplayarticle/editarticle/editarticle.component';

const routeArr: Routes = [
{path: '' , component: KbdisplayarticleComponent},
{path: 'add', component: AddarticleComponent},
{path:'edit/:id' ,component:EditarticleComponent}
];

export const approuting = RouterModule.forRoot(routeArr);
