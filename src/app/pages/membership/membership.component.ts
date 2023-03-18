import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {
fname:string='';
lname:string='';
email:string='';
pwd:string='';
Add:string="";


constructor(private auth:HeroService){

}

register() {
const ss={
fname:this.fname,
lname:this.lname,
email:this.email,
password:this.pwd,
address:this.Add
}
this.auth.register(ss);
this.email="";
this.fname="";
this.lname="";
this.pwd="";
this.Add="";


}

}
