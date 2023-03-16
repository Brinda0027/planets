import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SingleComponent } from './single/single.component';
import { FormsModule } from '@angular/forms';
import { SolarsystemComponent } from './pages/solarsystem/solarsystem.component';
import { MembershipComponent } from './pages/membership/membership.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    PlanetsComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponent,
    SolarsystemComponent,
    MembershipComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
