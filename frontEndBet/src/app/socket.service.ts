import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private url = environment.url;
  private socket;
  loginId:any;
  constructor(private router:Router) {
    this.socket = io(this.url, {
      transports: ['websocket']
    });
   }
   leaveRoom(ds:any){
    let login = this.loginId
    this.socket.on('leaveRoom',(data) =>{
      if(data.includes(login)){
        this.router.navigate(['/login'])
      }
    })
   }
   generateLoginId(current:any,data:any){
    // console.log("v",data);
    this.loginId =this.loginId|| current + data
    console.log("loginId",this.loginId);
    this.socket.emit('join_user',this.loginId)
   }

  public destorySocket = (eventId:any) => {
    this.socket.off(this.loginId);
    this.socket.emit('destroy_room');
  }
}
