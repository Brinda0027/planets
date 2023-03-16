import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {
  planets:any
  constructor(private hr:HeroService, private router:Router){ 
  this.planets=this.hr.getData();
  }
  gotohere(id:any)
    {
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])

  }

}
