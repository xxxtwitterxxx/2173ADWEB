import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'partners',
      component: PartnersComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'join',
      component: JoinComponent,
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
