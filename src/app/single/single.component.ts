import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  id:any;
  constructor(private hero:HeroService){}
  ngOnInit():void{
    this.id=localStorage.getItem('id')
     console.log(this.id);
    
    this.single=this.hero.getData()
    // this.single=SingleDataArray.filter(e=>e.id == id)
    // console.log(this.single)
  
  }
}



