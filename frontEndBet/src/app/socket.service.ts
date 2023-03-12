import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApiServicesService } from './api-services.service';
@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private url = environment.url;
  private socket;
  constructor(private router:Router,private apiService:ApiServicesService) {
    this.socket = io(this.url, {
      transports: ['websocket']
    });
   }
   leaveRoom(userName:any,ds:any){
    console.log('live-',userName,ds);
    if(userName != null && userName != undefined){
    this.socket.on('activeUsers',(data)=>{
      // console.log(userName,"==dfs",data[0][userName],data[0].hasOwnProperty(userName));
      if(data[0]?.hasOwnProperty(userName)){
        // console.log("dd",data[0][userName],"sd",ds)
        if(ds !=data[0][userName]){
        this.destorySocket("active/"+userName+"/"+ds);
        this.apiService.logout();
        }
      }
    })
  }

  }
   enterRoom(data:any){
    this.socket.emit('join_user',data)
   }

  public destorySocket = (event:any) => {
    console.log("destroy",event);
    this.socket.off(event);
    this.socket.off('activeUsers');
    this.socket.emit('destroy_room',event);
  }
}
