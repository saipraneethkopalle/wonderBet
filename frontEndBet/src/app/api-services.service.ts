import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private isAuthenticated = false;
  token:any;
  private tokenTimer: any;
  userId: any;
  userName: any;
  // private authStatusListner = new Subject<boolean>();

  email: any ;
  level: any;
  private error = '';
  private fancy: any = [];
  private autoFancyStatus: any = [];
  private fancyActivities: any = [];
  domains:any =localStorage.getItem("domains");
  isLogin:boolean=false;
  user = localStorage.getItem("user")
  loginstatus = new BehaviorSubject("");
  private authStatusListner = new Subject<boolean>();
  payload:any
  searchDate() {
    throw new Error('Method not implemented.');
  }
  secretKey = "WB13579";
  headers:any = {'authorization':localStorage.getItem("token") };
  constructor(private http:HttpClient,private router:Router) { 
    this.trackUserLogin()
  }

  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
  login(username: any, password: any) {
    let authData:any= { userName: username, password: password };
    authData =  {payload:this.encrypt(JSON.stringify(authData))}
    
    this.payload = authData;
    this.trackUserLogin()
    this.http.post<{ token: string, expiresIn: number, id: string, name: string, username: string, level: string, response: any }>(
      environment.url + "/api/v1/noAuth/login", authData)
      .subscribe((response:any) => {
        console.log("response",response.data)
        const token = response.data.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.data.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.data.userRoleId;
          this.userName = response.data.userName;
          // this.level = response.data.level;
          this.authStatusListner.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          //console.log(expirationDate);
          // this.setDomain(domains);
          let prevto=localStorage.getItem('token');
          console.log(prevto,token)
    
          this.saveAuthData(token, expirationDate, this.userId, this.userName, this.level);
          this.router.navigate(['']);
        
          // this.saveAuthData(token, expirationDate, this.userId, this.userName, this.level);
          // this.router.navigate(['']);
        }
      }, error => {
        this.error = error.error.message;
        console.log("error",error);
        this.authStatusListner.next(false);
      });
  }

  getLevelDetails(){
    const url = environment.url + "/api/v1/Auth/getLevelDetails"
    return this.http.get(url,{headers:this.headers})
  }
  getMatches(){
    const url = environment.customUrl + "/api/v1-custom/customMatches"
    return this.http.get(url)
  }

  addMatches(data:any){
    data = {payload:this.encrypt(JSON.stringify(data))};
    const url =  environment.url + "/api/v1/auth/addMatch"
    return this.http.post(url,data,{headers:this.headers})
  }

  getAllMatches(){
    const url =  environment.url + "/api/v1/auth/getAllMatches"
    return this.http.get(url,{headers:this.headers})
  }

  changePassword(data:any){
    data = {payload:this.encrypt(JSON.stringify(data))};
    const url =  environment.url + "/api/v1/auth/changePassword"
    return this.http.post(url,data,{headers:this.headers})
  }

  createSuperUser(data:any){
    data = {payload:this.encrypt(JSON.stringify(data))};
    const url = environment.url + "/api/v1/auth/addUser"
    return this.http.post(url,data,{headers:this.headers})
  }

  getSuperUser(roleId:any) {
    const url = environment.url + "/api/v1/auth/getUsersByRole/"+roleId
    return this.http.get(url,{headers:this.headers})
  }

  createWebsite(data:any){
    data={payload:this.encrypt(JSON.stringify(data))};
    const url=environment.url + "/api/v1/auth/addWebsite"
    return this.http.post(url,data,{headers:this.headers})
  }
  getAllWebsite(){
    const url=environment.url + "/api/v1/auth/getAllWebsite"
    return this.http.get(url,{headers:this.headers})
  }
  updateUserState(data:any) {
    data={payload:this.encrypt(JSON.stringify(data))}
    const url=environment.url + "/api/v1/auth/updateSuperAdminStatus"
    return this.http.post(url,data,{headers:this.headers});
  }

logout() {
  this.token = null;
  this.isAuthenticated = false;
  this.level = null;
  this.authStatusListner.next(false);
  clearInterval(this.tokenTimer);
  this.clearAuthData();
  this.userId = null;
  this.userName = null;
  console.log("i am inside logout function")
  this.router.navigate(['/login']);
}


private saveAuthData(token: string, expirationDate: Date, userId: string, userName: string,  level: string) {
  // console.log("saving",token, expirationDate, this.userId, this.userName, this.level)
  localStorage.setItem('token', token);
  this.headers.authorization =localStorage.getItem('token');
  localStorage.setItem('expiration', expirationDate.toISOString());
  localStorage.setItem('userId', userId);
  localStorage.setItem('user', userName);
  localStorage.setItem('level', level);
}

private clearAuthData() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  localStorage.removeItem('userId');
  localStorage.removeItem('user');
  localStorage.removeItem('level');
  localStorage.removeItem('domains');
}

private getAuthData() {
  const token = localStorage.getItem("token");
  const expirationDate = localStorage.getItem("expiration");
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("user");
  const level = localStorage.getItem("level");
  if (!token || !expirationDate) {
    return;
  }
  return {
    token: token,
    expirationDate: new Date(expirationDate),
    userId: userId,
    userName: userName,
    level: level
  }
}
private setAuthTimer(duration: number) {
  console.log("Setting Timer " + duration);
  this.tokenTimer = setTimeout(() => {
    this.logout();
    // this.trackUserLogin()
  }, duration * 1000);
}

trackUserLogin() {
  const url = environment.url + "/api/v1/noAuth/login"
  let data = this.http.post(url,this.payload,{headers:this.headers})
  console.log("data",data)
  data.subscribe((res:any)=>{
    console.log("rews",res)
  })
}

getAuthStatusListner() {
  return this.authStatusListner.asObservable();
}
getError() {
  return this.error;
}
}