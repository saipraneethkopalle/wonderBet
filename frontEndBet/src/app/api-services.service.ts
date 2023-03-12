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
  secretKey = "WB13579";
  headers:any = {'authorization':localStorage.getItem("token") };
  isLogin:boolean=true;
  user = localStorage.getItem("user")
  loginstatus = new BehaviorSubject("");
  private authStatusListner = new Subject<boolean>();
  private isAuthenticated = false;
  token:any;
  private tokenTimer: any;
  userId: any;
  userName: any;
  email: any ;
  level: any;
  private error = '';
  constructor(private http:HttpClient,private router:Router) { }

  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getUserLevel(){
    return localStorage.getItem("level");
  }
  getisLogin() {
    return this.isLogin;
  }

  getUserName() {
    return this.userName;
  }
  getId() {
    return this.userId;
  }
   setLoginStatus(value:any) {
    this.loginstatus.next(value);
  }
  getLoginStatus() {
    return this.loginstatus.asObservable();
  }
  login(data:any) {
    data = {payload:this.encrypt(JSON.stringify(data))};
    const url = environment.url + "/api/v1/noAuth/login"
    this.http.post<{ token: string, expiresIn: number, name: string, userName: string, level: string,isLogin:boolean,validationCode:any, response: any }>(
      url, data)
      .subscribe(response => {
        console.log("res",response);
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          // this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userName = response.userName;
          this.level = response.level;
          this.isLogin = response.isLogin;
          this.userId= response.validationCode;
          this.authStatusListner.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate,  this.userName, this.level,this.isLogin,this.userId);
          if(this.isLogin){
          this.router.navigate(['/']);
          }else{
            this.isLogin = false
          }
        }
      }, error => {
        this.error = error.error.message;
        console.log("error",error);
        this.authStatusListner.next(false);
      });
  }

  getError() {
    return this.error;
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.userName = authInformation.userName;
      this.level = authInformation.level;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListner.next(true);
    }
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
    this.router.navigate(['/login']);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting Timer " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userName: string,level: any,isLogin:any,userId:any) {
    // console.log("saving",token, expirationDate, this.userId, this.userName, this.level)
    localStorage.setItem('token', token);
    this.headers.authorization =localStorage.getItem('token');
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('user', userName);
    localStorage.setItem('level', level);
    localStorage.setItem('isLogin', isLogin);
    localStorage.setItem('userId', userId);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('level');
    localStorage.removeItem('isLogin');
    // localStorage.removeItem('domains');
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
  getAuthStatusListner() {
    return this.authStatusListner.asObservable();
  }

  // login(data:any){
  //   data = {payload:this.encrypt(JSON.stringify(data))};
  //   const url = environment.url + "/api/v1/noAuth/login"
  //   return this.http.post(url,data)
  // }
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
    const url=environment.url + "/api/v1/auth/updateUserStatus"
    return this.http.post(url,data,{headers:this.headers});
  }
  getAllUsers(){
    const url=environment.url + "/api/v1/auth/getAllUsers"
    return this.http.get(url,{headers:this.headers})
  }
}
