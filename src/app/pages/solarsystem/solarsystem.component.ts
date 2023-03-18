import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solarsystem',
  templateUrl: './solarsystem.component.html',
  styleUrls: ['./solarsystem.component.css']
})
export class SolarsystemComponent {
constructor(private router: Router) { }
goto(){
  this.router.navigate(['/membership']);
}
}
