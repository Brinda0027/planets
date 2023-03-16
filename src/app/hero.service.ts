import { Injectable } from '@angular/core';
import { planets } from 'src/assets/data/data';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
constructor() { }
  getData(){
    return planets
  }
}
