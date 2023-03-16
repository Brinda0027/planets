import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { SolarsystemComponent } from './pages/solarsystem/solarsystem.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
    path:'' ,component:HomepageComponent
  },
  {
    path:'about' ,component:AboutComponent
  },
  {
    path:'planets' ,component:PlanetsComponent
  },
  {
    path:'single' ,component:SingleComponent
  },
  {
    path:'solarsystem' ,component:SolarsystemComponent
  },
  {
    path:'membership' ,component:MembershipComponent
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
