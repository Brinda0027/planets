import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ="";
  password: string ="";
  uid : string ="";
constructor(private auth: HeroService) { }
  

login(){
  if (this.email==""){
  
  alert("Please enter your email")
  return;
  }
  if (this.password==""){
  
    alert("Please enter your password")
    return;
    }
  this.auth.login(this.email,this.password);
  alert("Login successful")
  this.email='';
  this.password='';
  
  }
}
