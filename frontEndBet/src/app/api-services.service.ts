import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  searchDate() {
    throw new Error('Method not implemented.');
  }
  secretKey = "WB13579";
  headers:any = {'authorization':localStorage.getItem("token") };
  constructor(private http:HttpClient) { }

  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
  login(data:any){
    data = {payload:this.encrypt(JSON.stringify(data))};
    const url = environment.url + "/api/v1/noAuth/login"
    return this.http.post(url,data)
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
}
