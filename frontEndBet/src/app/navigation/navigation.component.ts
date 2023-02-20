import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isActive:Boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token")
    console.log("token",token);
    if(token != null){
        this.isActive = true
    }else{
      this.isActive =false
      this.router.navigate(['/login'])
    }
  }
  logout(){
    localStorage.removeItem("token");
    this.isActive=false
    this.router.navigate(['/login'])
  }

}
