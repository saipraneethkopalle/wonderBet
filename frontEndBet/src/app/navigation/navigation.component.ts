import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiServicesService } from '../api-services.service';
import { SocketServiceService } from '../socket.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isAuthenticated:boolean=false;
  level:any;
  adminLevel:any;
  id:any;
  authListenerSubs: Subscription=new Subscription();
  currentUserName:any;
  constructor(private router:Router,private apiService:ApiServicesService,private socket:SocketServiceService) { }
  ngOnInit(): void {
    this.isAuthenticated = this.apiService.getIsAuth();
    if(!this.isAuthenticated){
      this.checkLogin();
    }
    this.level = this.apiService.getUserLevel();
    this.currentUserName = this.apiService.getUserName();
    if(this.level == '1') {
      this.adminLevel = true;
    }
    else {
      this.adminLevel = false;
    }

    this.authListenerSubs = this.apiService.getAuthStatusListner().subscribe((IsAuthenticated) => {
      console.log("isAuthenticated",IsAuthenticated);
        this.isAuthenticated = IsAuthenticated;
        this.level = this.apiService.getUserLevel();
        this.currentUserName = this.apiService.getUserName();
        this.id= this.apiService.getId()

        if(this.level == '1') {
           this.adminLevel = true;
        }
        else {
           this.adminLevel = false;
        }
    });
  }

  logout() {
    this.socket.destorySocket(this.currentUserName+"/"+this.id);
    this.apiService.logout();
  }
  checkLogin(){
    this.router.navigate(['/login'])
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.socket.destorySocket(this.currentUserName+"/"+this.id);
  }

}
